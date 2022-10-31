<template>
    <div class="community">
        <form-observer ref="formObserver" form-class="row" @submit="submit">
            <v-col cols="12">
                <text-field
                    :value.sync="form.title"
                    type="text"
                    :rules="{ required: true }"
                    sup-label="questionTitle"
                />
            </v-col>
            <v-col cols="12">
                <text-area
                    :value.sync="form.description"
                    :rules="{ required: true }"
                    sup-label="questionDescription"
                />
            </v-col>
            <v-col cols="12" md="6">
                <combox-field
                    :value.sync="form.tag"
                    :rules="{ required: false }"
                    :items="form.tag"
                    sup-label="tags"
                    :multiple="true"
                />
            </v-col>
            <v-col cols="12" md="6">
                <select-field
                    :value.sync="form.subject_id"
                    :rules="{ required: false }"
                    :items="subjects"
                    item-text="name"
                    sup-label="subject"
                />
            </v-col>
            <v-col cols="12" md="6">
                <select-field
                    :value.sync="form.category_id"
                    :rules="{ required: false }"
                    :items="categories"
                    item-text="category_name"
                    sup-label="categories"
                />
            </v-col>

            <v-col v-if="errors" cols="12">
                <Errors :errors="errors" />
            </v-col>

            <v-col cols="12" class="d-flex justify-end">
                <actions-btn
                    :loading="loading"
                    type="submit"
                    title="sendToApprove"
                    icon="fal fa-save"
                    color="secondary"
                />
            </v-col>
        </form-observer>
    </div>
</template>

<script>
export default {
    meta: { title: 'addNewQuestion' },
    layout: 'dashboard',
    data() {
        return {
            form: {
                title: null,
                description: null,
                subject_id: null,
                tag: [],
            },
            errors: null,
            loading: false,
            subjects: [],
            categories: [],
        }
    },
    fetch() {
        this.$axios.$get('/get/subject')
            .then((response) => {
                this.subjects = response.object
            })
        this.$axios.$get('/get/category')
            .then((response) => {
                this.categories = response.object
            })
    },
    methods: {
        submit() {
            this.errors = null
            this.loading = true
            this.$axios.$post('/teacher/community', this.convertObjToFormData(this.form, { indices: true }))
                .then((response) => {
                    this.$toasted.global.successMsg(response.message)
                    this.$router.push({ name: 'teacher-community' })
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
