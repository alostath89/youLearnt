<template>
    <v-row class="registerTeacher">
        <v-col cols="12" md="6">
            <div class="pa-7">
                <h2 class="text-h1">
                    Reasons to <span class="bold-underline">LEARN</span>
                    on <span class="bold-underline">YouLerant</span>
                </h2>
            </div>

            <div class="reasons">
                <v-row>
                    <v-col
                        v-for="(item, index) in items"
                        :key="index"
                        cols="12"
                        class="reasons-item"
                        md="6"
                    >
                        <div class="d-flex">
                            <i class="fal fa-check-circle me-3 primary--text" />
                            <p>
                                Choose a time that suits you to learn.
                                (24 hours a day, 7 days a week)
                            </p>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-col>

        <v-col cols="12" md="6" class="registration-form">
            <form-observer ref="formObserver" form-class="row" @submit="submit">
                <v-col cols="12">
                    <h6 class="text-h6 text-center">
                        Sign up to start learn whatever you want.
                    </h6>
                </v-col>
                <v-col cols="12">
                    <text-field
                        :value.sync="form.email"
                        type="text"
                        :rules="{ required: true, email: true }"
                        sub-label="email"
                    />
                </v-col>
                <v-col cols="6">
                    <text-field
                        :value.sync="form.first_name"
                        type="text"
                        :rules="{ required: true, min: 3 }"
                        sub-label="firstName"
                    />
                </v-col>
                <v-col cols="6">
                    <text-field
                        :value.sync="form.last_name"
                        type="text"
                        :rules="{ required: true, min: 3 }"
                        sub-label="lastName"
                    />
                </v-col>
                <v-col cols="12">
                    <text-field
                        :value.sync="form.password"
                        :type.sync="inputPassword"
                        name="password"
                        :rules="{ required: true, min: 6 }"
                        sub-label="password"
                    />
                </v-col>
                <v-col cols="12">
                    <text-field
                        :value.sync="form.password_confirmation"
                        :type.sync="inputPassword"
                        :rules="{ required: true, min: 6, confirmed: 'password' }"
                        sub-label="password"
                    />
                </v-col>
                <v-col cols="12">
                    <select-field
                        :value.sync="form.subjects"
                        :rules="{ required: false }"
                        :items="subjects"
                        sub-label="subjects"
                        :multiple="true"
                    />
                </v-col>
                <v-col cols="12">
                    <checkbox-field :value="form.accept">
                        <div>
                            Accept and agree to our
                            <a href="#" target="_blank" @click.stop>Terms</a>,
                            <a href="#" target="_blank" @click.stop>Policy</a> and
                            <a href="#" target="_blank" @click.stop>Cookies policy</a>
                        </div>
                    </checkbox-field>
                </v-col>

                <v-col v-if="errors" cols="12">
                    <Errors :errors="errors" />
                </v-col>

                <v-col cols="12" class="flex-center flex-column">
                    <v-btn
                        type="submit"
                        :loading="loading"
                        color="primary"
                        class="px-10 py-6 text-h6"
                    >
                        {{ $t('tutorRegister') }}
                    </v-btn>
                    <p class="mt-4">
                        Already have an account?
                        <nuxt-link :to="{ name: 'login' }">
                            Login
                        </nuxt-link>
                    </p>
                </v-col>
            </form-observer>
        </v-col>
    </v-row>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    data() {
        return {
            loading: false,
            errors: null,
            form: {
                email: null,
                first_name: null,
                last_name: null,
                password: null,
                password_confirmation: null,
                accept: true,
                subjects: [],
                type: 'teacher',
                ref: this.$route.params.ref,
            },
            subjects: [],
            inputPassword: 'password',
            items: [
                'Choose a time that suits you to learn. (24 hours a day, 7 days a week)',
                'Choose the hourly cost that fits you.',
                'Learn any subject you want.',
                'Choose tutors from anywhere around the world.',
                'Buy a package that fits your needs.',
                'Learn your lessons from anywhere on Earth',
                'Change your tutor whenever you want.',
                'Use all modern techniques in learning.',
            ],
        }
    },
    fetch() {
        this.$axios.$get('/get/subject')
            .then((response) => {
                this.subjects = response.object
            })
    },
    methods: {
        ...mapMutations(['setUserDetails']),
        submit() {
            const objToPost = JSON.parse(JSON.stringify(this.form))
            objToPost.subjects = objToPost.subjects.map(id => ({ id }))

            this.errors = null
            this.loading = true
            this.$axios.$post('/auth/register', this.convertObjToFormData(objToPost, { indices: true }))
                .then((response) => {
                    this.$toasted.global.successMsg(response.message)
                    this.setUserDetails(response.object)
                    this.$nextTick(() => {
                        this.$router.push({ name: 'teacher' })
                    })
                })
                .catch((error) => {
                    this.errors = this.catchException(error)
                    this.setUserDetails(null)
                })
                .finally(() => {
                    this.loading = false
                })
        },
    },
}
</script>
