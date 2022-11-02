<template>
    <div class="container">
        <div class="pt-10 mt-md-10 mt-0 mb-md-5">
            <h2 class="">Reasons to <u>Learn</u> <br/> on YouLerant</h2>
        </div>
        <v-row class="registerStudent">
        <v-col cols="12" md="7">
            <div class="reasons">
                <v-row>
                    <v-col cols="12" md="6">
                        <div class="d-flex">
                            <i class="fas fa-check-circle me-3 primary--text" />
                            <p>
                                Choose a time that suits you to learn.
                                (24 hours a day, 7 days a week)
                            </p>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <div class="d-flex">
                            <i class="fas fa-check-circle me-3 primary--text" />
                            <p>Choose the hourly cost that fits you.</p>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <div class="d-flex">
                            <i class="fas fa-check-circle me-3 primary--text" />
                            <p>Learn any subject you want.</p>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <div class="d-flex">
                            <i class="fas fa-check-circle me-3 primary--text" />
                            <p>Choose tutors from anywhere around the world.</p>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <div class="d-flex">
                            <i class="fas fa-check-circle me-3 primary--text" />
                            <p>Buy a package that fits your needs.</p>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <div class="d-flex">
                            <i class="fas fa-check-circle me-3 primary--text" />
                            <p>Learn your lessons from anywhere on Earth</p>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <div class="d-flex">
                            <i class="fas fa-check-circle me-3 primary--text" />
                            <p>Change your tutor whenever you want.</p>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <div class="d-flex">
                            <i class="fas fa-check-circle me-3 primary--text" />
                            <p>Use all modern techniques in learning.</p>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-col>
        <v-col cols="12" md="5">
            <div  class="registration-form">
                <div class="registration-form-bg">
                    <form-observer ref="formObserver" form-class="row" @submit="submit">
                <v-col cols="12" class="py-0">
                    <h3 class="text-center">
                        Sign up to start learn whatever you want.
                    </h3>
                </v-col>
                <v-col cols="12" class="py-0">
                    <text-field
                        :value.sync="form.email"
                        type="text"
                        :rules="{ required: true, email: true }"
                        sub-label="email"
                    />
                </v-col>
                <v-col cols="6" class="py-0">
                    <text-field
                        :value.sync="form.first_name"
                        type="text"
                        :rules="{ required: true, min: 3 }"
                        sub-label="firstName"
                    />
                </v-col>
                <v-col cols="6" class="py-0">
                    <text-field
                        :value.sync="form.last_name"
                        type="text"
                        :rules="{ required: true, min: 3 }"
                        sub-label="lastName"
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
                    <text-field
                        :value.sync="form.password_confirmation"
                        :type.sync="inputPassword"
                        :rules="{ required: true, min: 6, confirmed: 'password' }"
                        sub-label="password"
                    />
                </v-col>
                <v-col cols="12" class="py-0">
                    <checkbox-field :value="form.accept" class="checkbox-style">
                        <div>
                            Accept and agree to our
                            <a href="#" target="_blank" @click.stop>Terms</a>,
                            <a href="#" target="_blank" @click.stop>Policy</a> and
                            <a href="#" target="_blank" @click.stop>Cookies policy</a>
                        </div>
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
                        {{ $t('studentRegister') }}
                    </v-btn>
                    <p class="mt-4 accountLoginLink">
                        Already have an account?
                        <nuxt-link :to="{ name: 'login' }">
                            Login
                        </nuxt-link>
                    </p>
                </v-col>
            </form-observer>
                </div>
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
                type: 'student',
                ref: this.$route.params.ref,
            },
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
    methods: {
        ...mapMutations(['setUserDetails']),
        submit() {
            const objToPost = JSON.parse(JSON.stringify(this.form))

            this.errors = null
            this.loading = true
            this.$axios.$post('/auth/register', this.convertObjToFormData(objToPost))
                .then((response) => {
                    this.$toasted.global.successMsg(response.message)
                    this.setUserDetails(response.object)
                    this.$nextTick(() => {
                        this.$router.push({ name: 'student' })
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
