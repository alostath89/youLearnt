<template>
    <form-observer ref="formObserver" @submit="submit">
        <v-row>
            <v-col cols="12" md="3">
                <text-field
                    :value.sync="form.first_name"
                    type="text"
                    :rules="{ required: true }"
                    sup-label="firstName"
                />
            </v-col>
            <v-col cols="12" md="3">
                <text-field
                    :value.sync="form.last_name"
                    type="text"
                    :rules="{ required: true }"
                    sup-label="lastName"
                />
            </v-col>
            <v-col cols="12" md="6">
                <text-field
                    :value.sync="form.email"
                    type="email"
                    :rules="{ required: true, email: true }"
                    sup-label="email"
                />
            </v-col>
            <v-col cols="12" md="3">
                <date-field
                    :value.sync="form.birthday"
                    :rules="{ required: true }"
                    sup-label="dateOfBirth"
                />
            </v-col>
            <v-col cols="12" md="3">
                <select-field
                    :value.sync="form.country_id"
                    :rules="{ required: true }"
                    :items="countries"
                    sup-label="country"
                    @update:value="countryUpdated"
                />
            </v-col>
            <v-col cols="12" md="3">
                <select-field
                    :value.sync="form.city_name"
                    :rules="{ required: true }"
                    :items="cities"
                    sup-label="city"
                    item-value="name"
                />
            </v-col>
            <v-col cols="12" md="3">
                <select-field
                    :value.sync="form.timezone"
                    :rules="{ required: true }"
                    :items="timezones"
                    sup-label="timezone"
                />
            </v-col>
            <v-col cols="12" md="6">
                <text-field
                    :value.sync="form.mobile"
                    :rules="{ required: true, numeric: true, length: 10 }"
                    sup-label="mobile"
                    type="number"
                />
            </v-col>
            <v-col cols="12" md="6">
                <text-field
                    :value.sync="form.customLink"
                    :rules="{ required: true }"
                    sup-label="customProfileURL"
                />
            </v-col>
        </v-row>

        <v-row v-for="(item, index) in form.language" :key="index">
            <v-col cols="12" md="3">
                <select-field
                    :value.sync="item.id"
                    :rules="{ required: true }"
                    :items="languageSpoken"
                    item-text="language_name"
                    sup-label="languageSpoken"
                />
            </v-col>
            <v-col cols="12" md="3" class="d-flex align-center">
                <select-field
                    class="w-100 me-3"
                    :value.sync="item.level"
                    :rules="{ required: true }"
                    :items="levels"
                    sup-label="level"
                />
                <actions-tooltip
                    v-if="index >= form.language.length - 1"
                    color="primary"
                    icon="fal fa-plus"
                    title="addNewLanguage"
                    @click="form.language.push({
                        id: null,
                        level: null,
                    })"
                />
                <actions-tooltip
                    v-else
                    color="secondary"
                    icon="fal fa-minus"
                    title="removeNewLanguage"
                    @click="form.language.splice(index, 1)"
                />
            </v-col>
        </v-row>

        <v-col v-if="errors" cols="12">
            <Errors :errors="errors" />
        </v-col>

        <v-col cols="12" class="d-flex justify-end">
            <actions-btn
                title="save"
                color="secondary lighten-2"
                icon="fal fa-save"
                type="submit"
            />
        </v-col>
    </form-observer>
</template>

<script>
export default {
    meta: { title: 'profileSettings' },
    layout: 'dashboard',
    data() {
        return {
            errors: null,
            countries: [],
            levels: [
                {
                    name: this.$t('basic'),
                    id: 'Basic',
                },
                {
                    name: this.$t('conversational'),
                    id: 'Conversational',
                },
                {
                    name: this.$t('fluent'),
                    id: 'Fluent',
                },
                {
                    name: this.$t('native'),
                    id: 'Native',
                },
            ],
            languageSpoken: [],
            cities: [],
            timezones: [],
            form: {
                first_name: null,
                last_name: null,
                email: null,
                birthday: null,
                country_id: null,
                city_name: null,
                timezone: null,
                mobile: null,
                customLink: null,
                language: [
                    {
                        id: null,
                        level: null,
                    },
                ],
            },
        }
    },
    fetch() {
        this.getData()
    },
    methods: {
        getData() {
            this.$axios.$get('/get/country')
                .then((response) => {
                    this.countries = response.object
                })

            this.$axios.$get('/get/language')
                .then((response) => {
                    this.languageSpoken = response.object
                })

            this.$axios.$get('/teacher/profile/info')
                .then((response) => {
                    if (!response.object.language || !response.object.language.length) response.object.language = [
                        {
                            id: null,
                            level: null,
                        },
                    ]

                    this.form = response.object
                })
        },
        countryUpdated(val) {
            if (!val) {
                this.timezones = []
                this.cities = []
                return
            }
            this.$axios.$get(`/get/city?id=${val}`)
                .then((response) => {
                    this.cities = response.object
                })
            this.$axios.$get(`/get/timezone/${val}`)
                .then((response) => {
                    this.timezones = response.object
                })
        },
        submit() {
            this.$axios.$post('/teacher/profile/info', this.convertObjToFormData(this.form, { indices: true }))
                .then((response) => {
                    this.$toasted.global.successMsg(response.message)
                    this.$emit('closeDialog', {
                        where: 'education',
                        payload: response.object.certification[0],
                    })
                })
                .catch((error) => {
                    this.errors = this.catchException(error)
                })
                .finally(() => {
                    this.loading = false
                })
        },
    },
}
</script>
