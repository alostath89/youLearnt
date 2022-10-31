import Vue from 'vue'
import { serialize } from 'object-to-formdata'

/* Make sure to pick a unique name for the flag
   so it won't conflict with any other mixin. */

const checkIsPrimitive = (value) => {
    if (!value) return false
    if (typeof value === 'object' || typeof value === 'function') return false
    return true
}

if (!Vue.xhr) {
    Vue.xhr = true
    Vue.mixin({
        methods: {
            checkIsPrimitive,
            convertObjToFormData: (payload, options) => serialize(payload, options),
            buildRequestParams(payload) {
                const
                    query = {}
                const notUsedProps = ['groupBy', 'groupDesc', 'multiSort', 'mustSort']
                const params = JSON.parse(JSON.stringify(payload))

                notUsedProps.forEach((item) => {
                    if (params[item]) delete params[item]
                })
                if (params.sortDesc) [params.sortDesc] = params.sortDesc

                if (params.sortBy) {
                    [params.sorting] = params.sortBy
                    delete params.sortBy
                }

                if (params.itemsPerPage) {
                    params.maxResultCount = params.itemsPerPage
                    delete params.itemsPerPage
                }

                if (params.page) {
                    params.SkipCount = (params.page - 1) * params.maxResultCount
                    delete params.page
                }

                for (const [key, value] of Object.entries(params)) if (checkIsPrimitive(value)) query[key] = value
                else if (Array.isArray(value) && value.length) value.forEach((item, index) => {
                    if (!item) item = null
                    if (item) query[`${key}[${index}]`] = item
                })

                return query
            },
            catchException(exception) {
                if (exception && exception.response && exception.response.data && exception.response.data.message) {
                    if (typeof exception.response.data.message === 'object') {
                        if (Object.values(exception.response.data.message).length === 1) {
                            Vue.toasted.global.errorMsg(Object.values(exception.response.data.message)[0]);
                        } else return exception.response.data.message
                    } else Vue.toasted.global.errorMsg(exception.response.data.message)
                }
            },
        },
    })
}
