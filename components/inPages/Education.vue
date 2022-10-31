<template>
    <Dialog
        :is-dialog-open="isDialogOpen"
        :title="form.id ? 'edit' : 'add'"
        @closeDialog="$emit('closeDialog')"
    >
        <form-observer ref="formObserver" @submit="submit">
            <v-row>
                <v-col cols="12" md="6">
                    <text-field
                        :value.sync="form.university"
                        :rules="{ required: true }"
                        sup-label="university"
                    />
                </v-col>
                <v-col cols="12" md="6">
                    <text-field
                        :value.sync="form.specialization"
                        :rules="{ required: true }"
                        sup-label="specialization"
                    />
                </v-col>
                <v-col cols="12" md="4">
                    <text-field
                        :value.sync="form.degree"
                        :rules="{ required: true }"
                        sup-label="degree"
                    />
                </v-col>
                <v-col cols="12" md="4">
                    <select-field
                        :value.sync="form.degree_type"
                        :rules="{ required: true }"
                        :items="degreeTypes"
                        item-text="title"
                        item-value="value"
                        sup-label="degreeType"
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
                <v-col cols="12" md="4">
                    <file-field
                        :value.sync="form.education_image"
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
            loading: false,
            errors: false,
            degreeTypes: [
                {
                    title: this.$t('associate'),
                    value: 'Associate',
                },
                {
                    title: this.$t('bachelor'),
                    value: 'Bachelor',
                },
                {
                    title: this.$t('master'),
                    value: 'Master',
                },
                {
                    title: this.$t('doctorate'),
                    value: 'Doctorate',
                },
                {
                    title: this.$t('nonDegree'),
                    value: 'Non-Degree',
                },
                {
                    title: this.$t('diploma'),
                    value: 'Diploma',
                },
                {
                    title: this.$t('bootCamps'),
                    value: 'BootCamps',
                },
            ],
        }
    },
    methods: {
        reset() {
            this.$refs.formObserver.reset()
        },
        submit() {
            const objCopy = { education: [this.form] }

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
                        payload: response.object.educations[0],
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
            this.$axios.$post(`/teacher/profile/education/${this.form.id}`, this.convertObjToFormData(objCopy, { indices: true }))
                .then((response) => {
                    this.$toasted.global.successMsg(response.message)
                    this.$emit('closeDialog', {
                        where: 'education',
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
