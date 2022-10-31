<template>
    <div>
        <form-observer ref="formObserver" form-class="row" @submit="submit">
            <v-col cols="12">
                <text-field
                    :value.sync="form.title"
                    type="text"
                    :rules="{ required: true }"
                    sup-label="blogTitle"
                />
            </v-col>
            <v-col cols="12">
                <text-area
                    :value.sync="form.description"
                    :rules="{ required: true }"
                    sup-label="blogDescription"
                />
            </v-col>
            <v-col cols="12" md="6">
                <combox-field
                    :value.sync="form.tag"
                    :rules="{ required: false }"
                    :items="form.tag"
                    sup-label="subjects"
                    :multiple="true"
                />
            </v-col>
            <v-col cols="12" md="6">
                <file-field
                    :value.sync="form.blog_image"
                    :rules="{ required: false }"
                    sup-label="file"
                />
            </v-col>
            <v-col v-if="errors" cols="12">
                <Errors :errors="errors" />
            </v-col>
            <v-col cols="12" class="d-flex justify-end">
                <actions-btn :loading="loading" type="submit" title="sendToApprove" icon="fal fa-save" color="secondary" />
            </v-col>
        </form-observer>
    </div>
</template>

<script>
export default {
    meta: { title: 'addNewBlog' },
    layout: 'dashboard',
    data() {
        return {
            loading: false,
            errors: null,
            form: {
                title: null,
                description: null,
                blog_image: null,
                tag: [],
            },
        }
    },
    methods: {
        submit() {
            this.errors = null
            this.loading = true
            this.$axios.$post('/teacher/blog', this.convertObjToFormData(this.form, { indices: true }))
                .then((response) => {
                    this.$toasted.global.successMsg(response.message)
                    this.$router.push({ name: 'teacher-blog' })
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
