import { extend, localize, ValidationProvider, ValidationObserver } from 'vee-validate'
import * as rules from 'vee-validate/dist/rules'
import Vue from 'vue'
import ar from '~/locales/veeValidate/ar'
import en from '~/locales/veeValidate/en'
import momentConfig from '~/plugins/momentConfig'


Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

extend('dateComparison', {
    validate(value, args) {
        if (!args[1]) return true

        /* validate = value is the field value; args[0] is the compare method; args[1] is to compare value. */
        const isValid = momentConfig.methods.conditionallyCheckDate(value, args[0], args[1])
        return isValid
    },
}, { hasTarget: true })

extend('timeComparison', {
    validate(value, args) {
        if (!args[1]) return true

        value = momentConfig.methods.momentParseTime(value)
        args[1] = momentConfig.methods.momentParseTime(args[1])

        /* validate = value is the field value; args[0] is the compare method; args[1] is to compare value. */
        const isValid = momentConfig.methods.conditionallyCheckDate(value, args[0], args[1])
        args[1] = momentConfig.methods.momentFormatDateTime(args[1], 'time24')
        return isValid
    },
}, { hasTarget: true })

extend('minYear', {
    validate(value, arg) {
        if (!arg || !value) return true
        return parseInt(value) >= parseInt(arg)
    },
}, { hasTarget: true })

extend('systemPassword', {
    validate(value, arg) {
        if (!arg || !value) return true

        const passwordReges = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{6,}$/
        return passwordReges.test(value)
    },
})


Object.keys(rules).forEach(rule => extend(rule, rules[rule]))
localize({
    en,
    ar,
})
