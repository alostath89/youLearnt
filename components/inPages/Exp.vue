<template>
    <Dialog
        :is-dialog-open="isDialogOpen"
        :title="form.id ? 'edit' : 'add'"
        @closeDialog="$emit('closeDialog')"
    >
        <form-observer ref="formObserver" @submit="submit">
            <v-row>
                <v-col cols="12">
                    <text-field
                        :value.sync="form.position"
                        :rules="{ required: true }"
                        sup-label="position"
                    />
                </v-col>
                <v-col cols="12" md="4">
                    <text-field
                        :value.sync="form.company"
                        :rules="{ required: true }"
                        sup-label="company"
                    />
                </v-col>
                <v-col cols="12" md="4">
                    <date-field
                        :value.sync="form.start_at"
                        :rules="{ required: true }"
                        sup-label="startAt"
                    />
                </v-col>
                <v-col cols="12" md="4">
                    <date-field
                        :value.sync="form.end_at"
                        :rules="{ required: true }"
                        sup-label="endAt"
                    />
                </v-col>
                <v-col v-if="errors" cols="12">
                    <Errors :errors="errors" />
                </v-col>
                <v-col class="d-flex align-center justify-end">
                    <actions-btn
                        :loading="loading"
                        title="save"
                        icon="fal fa-save"
                        type="submit"
                    />
                </v-col>
            </v-row>
        </form-observer>
    </Dialog>
</template>

<script>
export default {
    props: {
        isDialogOpen: {
            type: [Boolean],
            default: false,
        },
        form: {
            type: [Object],
            default() {},
        },
    },
    data() {
        return {
            loading: false,
            errors: null,
        }
    },
    methods: {
        reset() {
            this.$refs.formObserver.reset()
        },
        submit() {
            const objCopy = { exp: [this.form] }

            this.errors = null
            this.loading = true
            if (this.form.id) this.update(objCopy)
            else this.create(objCopy)
        },
        create(objCopy) {
            this.$axios.$post('/teacher/profile/background', this.convertObjToFormData(objCopy, { indices: true }))
                .then((response) => {
                    this.$toasted.global.successMsg(response.message)
                    this.$emit('closeDialog', {
                        where: 'education',
                        payload: response.object.experience[0],
                    })
                })
                .catch((error) => {
                    this.errors = this.catchException(error)
                })
                .finally(() => {
                    this.loading = false
                })
        },
        update(objCopy) {
            this.$axios.$post(`/teacher/profile/experience/${this.form.id}`, this.convertObjToFormData(objCopy, { indices: true }))
                .then((response) => {
                    this.$toasted.global.successMsg(response.message)
                    this.$emit('closeDialog', {
                        where: 'experience',
                        payload: response.object,
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
