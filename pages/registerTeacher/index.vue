<template>
    <div class="container">
        <h2 class="pt-10 mt-md-10 mt-0 mb-md-5 mb-10">
            <h2 class="">Reasons to <u>Teach</u> <br/> on YouLerant</h2>
        </h2>
        <v-row class="registerTeacher pb-16">
            <v-col cols="12" md="7">
                <div class="reasons">
                    <v-row>
                        <v-col cols="12" md="6">
                            <div class="d-flex">
                                <i class="fas fa-check-circle me-3 secondary--text" />
                                <p>
                                    Choose a time that suits you to learn.
                                    (24 hours a day, 7 days a week)
                                </p>
                            </div>
                        </v-col>
                        <v-col cols="12" md="6">
                            <div class="d-flex">
                                <i class="fas fa-check-circle me-3 secondary--text" />
                                <p>Set your desired hourly rate.</p>
                            </div>
                        </v-col>
                        <v-col cols="12" md="6">
                            <div class="d-flex">
                                <i class="fas fa-check-circle me-3 secondary--text" />
                                <p>Teach any subject you like and you are master in.</p>
                            </div>
                        </v-col>
                        <v-col cols="12" md="6">
                            <div class="d-flex">
                                <i class="fas fa-check-circle me-3 secondary--text" />
                                <p>You decide your income, there is no income ceiling.</p>
                            </div>
                        </v-col>
                        <v-col cols="12" md="6">
                            <div class="d-flex">
                                <i class="fas fa-check-circle me-3 secondary--text" />
                                <p>Withdraw your money at any time.</p>
                            </div>
                        </v-col>
                        <v-col cols="12" md="6">
                            <div class="d-flex">
                                <i class="fas fa-check-circle me-3 secondary--text" />
                                <p>Teach your lessons from anywhere on Earth.</p>
                            </div>
                        </v-col>
                        <v-col cols="12" md="6">
                            <div class="d-flex">
                                <i class="fas fa-check-circle me-3 secondary--text" />
                                <p>Attract students from all over the world.</p>
                            </div>
                        </v-col>
                        <v-col cols="12" md="6">
                            <div class="d-flex">
                                <i class="fas fa-check-circle me-3 secondary--text" />
                                <p>Use all modern techniques in teaching.</p>
                            </div>
                        </v-col>
                        <v-col cols="12" md="6">
                            <div class="d-flex">
                                <i class="fas fa-check-circle me-3 secondary--text" />
                                <p>There is no manager! You decide whenever you promoted.</p>
                            </div>
                        </v-col>
                        <v-col cols="12" md="6">
                            <div class="d-flex">
                                <i class="fas fa-check-circle me-3 secondary--text" />
                                <p>Work without transportation.</p>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
            <v-col cols="12" md="5" class="registration-form">
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
                        <select-field
                            :value.sync="form.subjects"
                            :rules="{ required: false }"
                            :items="subjects"
                            sub-label="subjects"
                            :multiple="true"
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
                    <v-col cols="12" class="py-0 flex-center flex-column">
                        <v-btn
                            type="submit"
                            :loading="loading"
                            color="secondary"
                            class="px-10 py-6 signUpBtn"
                        >
                            {{ $t('tutorRegister') }}
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
