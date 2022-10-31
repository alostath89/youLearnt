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
                        :value.sync="form.title"
                        :rules="{ required: true }"
                        sup-label="title"
                    />
                </v-col>
                <v-col cols="12" md="6">
                    <select-field
                        :value.sync="form.status"
                        :rules="{ required: true }"
                        item-text="title"
                        item-value="value"
                        :items="status"
                        sup-label="status"
                    />
                </v-col>
                <v-col cols="12" md="6">
                    <select-field
                        :value.sync="form.type"
                        :rules="{ required: true }"
                        item-text="title"
                        item-value="value"
                        :items="types"
                        sup-label="type"
                    />
                </v-col>
                <v-col cols="12" md="6">
                    <date-field
                        :value.sync="form.start_at"
                        :min="momentFormatDateTime(momentTZ().add(1, 'days'), 'dashedDate')"
                        :rules="{ required: true }"
                        sup-label="startAt"
                    />
                </v-col>
                <v-col cols="12" md="6">
                    <date-field
                        :value.sync="form.end_at"
                        :rules="{ required: true }"
                        :min="momentFormatDateTime(momentTZ(form.start_at).add(1,'days'), 'dashedDate')"
                        sup-label="endAt"
                    />
                </v-col>
                <v-col cols="12" md="6">
                    <select-field
                        :value.sync="form.timezone"
                        :rules="{ required: true }"
                        item-text="title"
                        item-value="value"
                        :items="timeZones"
                        sup-label="timezone"
                    />
                </v-col>
                <v-col v-if="errors" cols="12">
                    <Errors :errors="errors" />
                </v-col>
                <v-col class="d-flex align-center justify-end">
                    <actions-btn
                        title="save"
                        :loading="loading"
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
    },
    data() {
        return {
            form: {
                title: null,
                status: null,
                type: null,
                start_at: null,
                end_at: null,
                timezone: null,
            },
            status: [
                {
                    title: this.$t('available'),
                    value: 'available',
                },
                {
                    title: this.$t('inClass'),
                    value: 'inClass',
                },
                {
                    title: this.$t('appointment'),
                    value: 'appointment',
                },
                {
                    title: this.$t('done'),
                    value: 'done',
                },
                {
                    title: this.$t('full'),
                    value: 'full',
                },
            ],
            types: [
                {
                    title: this.$t('one'),
                    value: 'one',
                },
                {
                    title: this.$t('group'),
                    value: 'group',
                },
            ],
            timeZones: [],
            errors: null,
            loading: false,
        }
    },
    fetch() {
        this.$axios.$get('get/timezone')
            .then((response) => {
                this.timeZones = response.object.map((item) => {
                    const newItem = {
                        title: item,
                        value: item,
                    }
                    return newItem
                })
            })
    },
    methods: {
        reset() {
            this.$refs.formObserver.reset()
            this.form = {
                title: null,
                status: null,
                type: null,
                start_at: null,
                end_at: null,
                timezone: null,
            }
        },
        submit() {
            const objCopy = JSON.parse(JSON.stringify(this.form))
            objCopy.start_at = this.momentFormatDateTime(objCopy.start_at, 'dashedDateTime')
            objCopy.end_at = this.momentFormatDateTime(objCopy.end_at, 'dashedDateTime')


            this.errors = null
            this.loading = true
            this.$axios.$post('/teacher/profile/book', this.convertObjToFormData(objCopy))
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
