<template>
    <div class="container">
        <v-row class="registerStudent justify-center">
            <v-col cols="12" md="10" class="py-0">
                <div  class="registration-form">
                    <v-row class="justify-center">
                        <v-col cols="12" md="7" class="py-0">
                            <div class="registration-form-bg">
                        <form-observer ref="formObserver" form-class="row" @submit="submit">
                            <v-col cols="12" class="py-0">
                                <h3 class="text-center">Log In</h3>
                            </v-col>
                            <v-col cols="12" class="py-0">
                                <text-field
                                    :value.sync="form.email"
                                    type="text"
                                    :rules="{ required: true, email: true }"
                                    sub-label="email"
                                />
                            </v-col>
                            <v-col cols="12" class="py-0">
                                <text-field
                                    :value.sync="form.password"
                                    :type.sync="inputPassword"
                                    name="password"
                                    :rules="{ required: true, min: 6 }"
                                    sub-label="password"
                                />
                            </v-col>
                            <v-col cols="12" class="py-0">
                                <checkbox-field :value="form.accept" class="checkbox-style">
                                    <div>Remember Me</div>
                                </checkbox-field>
                            </v-col>
                            <v-col v-if="errors" cols="12" class="py-0">
                                <Errors :errors="errors" />
                            </v-col>
                            <v-col cols="12" class="flex-center flex-column">
                                <v-btn
                                    :loading="loading"
                                    type="submit"
                                    color="primary"
                                    class="px-10 py-6 signUpBtn"
                                >
                                    LOG IN
                                </v-btn>
                                <p class="mt-4 accountLoginLink">
                                    Don`t Have an account?
                                    <nuxt-link :to="{ name: 'login' }">
                                        Register
                                    </nuxt-link>
                                </p>
                            </v-col>
                        </form-observer>
                    </div>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
        </v-row>
    </div>
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
