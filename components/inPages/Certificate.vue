<template>
    <Dialog
        :is-dialog-open="isDialogOpen"
        :title="form.id ? 'edit' : 'add'"
        @closeDialog="$emit('closeDialog')"
    >
        <form-observer ref="formObserver" @submit="submit">
            <v-row>
                <v-col cols="12" md="6">
                    <select-field
                        :value.sync="form.subject_id"
                        :rules="{ required: true }"
                        :items="subjects"
                        option-text="name"
                        sup-label="subject"
                    />
                </v-col>
                <v-col cols="12" md="6">
                    <date-field
                        :value.sync="form.issued_date"
                        :rules="{ required: true }"
                        sup-label="issuedDate"
                    />
                </v-col>
                <v-col cols="12" md="6">
                    <text-field
                        :value.sync="form.issued_by"
                        :rules="{ required: true }"
                        sup-label="issuedBy"
                    />
                </v-col>
                <v-col cols="12" md="6">
                    <file-field
                        :value.sync="form.certification_image"
                        :rules="{ required: false }"
                        sup-label="certificate"
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
            subjects: [],
            errors: null,
            loading: false,
        }
    },
    fetch() {
        this.$axios.$get('/get/subject')
            .then((response) => {
                this.subjects = response.object
            })
    },
    methods: {
        reset() {
            this.$refs.formObserver.reset()
        },
        submit() {
            const objCopy = { certification: [this.form] }

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
                        payload: response.object.certifications[0],
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
            this.$axios.$post(`/teacher/profile/certification/${this.form.id}`, this.convertObjToFormData(objCopy, { indices: true }))
                .then((response) => {
                    this.$toasted.global.successMsg(response.message)
                    this.$emit('closeDialog', {
                        where: 'certification',
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
