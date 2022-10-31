<template>
    <div class="changePassword">
        <form-observer ref="formObserver" @submit="submit">
            <v-row>
                <v-col cols="6">
                    <text-field
                        :value.sync="form.password"
                        :type.sync="inputPassword"
                        :rules="{ required: true }"
                        sup-label="currentPassword"
                    />
                </v-col>
                <v-col cols="6">
                    <text-field
                        :value.sync="form.new_password"
                        :type.sync="inputPassword"
                        name="password"
                        :rules="{ required: true }"
                        sup-label="password"
                    />
                </v-col>
                <v-col cols="6">
                    <text-field
                        :value.sync="form.new_password_confirmation"
                        :type.sync="inputPassword"
                        :rules="{ required: true, confirmed: 'password' }"
                        sup-label="password"
                    />
                </v-col>
                <v-col md="6" cols="12" class="justify-end d-flex align-center">
                    <actions-btn
                        :loading="loading"
                        title="save"
                        icon="fal fa-save"
                        type="submit"
                    />
                </v-col>

                <v-col v-if="errors" cols="12">
                    <Errors :errors="errors" />
                </v-col>
            </v-row>
        </form-observer>
    </div>
</template>

<script>
export default {
    meta: { title: 'Change password' },
    layout: 'dashboard',
    data() {
        return {
            errors: null,
            loading: false,
            inputPassword: 'password',
            form: {
                password: null,
                new_password: null,
                new_password_confirmation: null,
            },
        }
    },
    methods: {
        submit() {
            this.loading = true
            this.errors = null
            this.$axios.$post('/auth/update-password', this.convertObjToFormData(this.form))
                .then((response) => {
                    this.$toasted.global.successMsg(response.message)
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
