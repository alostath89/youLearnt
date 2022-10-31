<template>
    <div class="blog">
        <v-row class="mb-5">
            <v-col class="d-flex justify-space-between align-center">
                <h2 class="primary-bold text-h4">
                    {{ $t('blog') }}
                </h2>

                <actions-btn
                    title="addNewBlog"
                    icon="fal fa-plus"
                    @click="$router.push({ name: 'teacher-blog-id', params: { id: 0 } })"
                />
            </v-col>
        </v-row>

        <v-row>
            <v-col v-for="(item, index) in items" :key="index" cols="12" md="6">
                <v-card outlined class="my-3 blog-block">
                    <v-img
                        height="250"
                        :src="item.image_url"
                    />

                    <v-card-title class="d-flex justify-space-between">
                        <span>
                            {{ item.title }}
                        </span>
                        <actions-tooltip
                            :with-confirm="true"
                            title="delete"
                            :loading="item.loading"
                            color="white"
                            icon="fal fa-trash"
                            :outlined="true"
                            @confirmed="confirmed(index)"
                        />
                    </v-card-title>
                    <v-card-text>
                        <p class="text-caption">
                            {{ momentFormatDateTime(item.created_at) }}
                        </p>
                        <p>
                            {{ item.description }}
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row v-if="totalCount">
            <v-col cols="12">
                <pagination
                    :total-count="totalCount"
                    @input="getData($event)"
                />
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    meta: { title: null },
    layout: 'dashboard',
    data() {
        return {
            items: [],
            loading: false,
            totalCount: 0,
        }
    },
    fetch() {
        this.getData()
    },
    methods: {
        confirmed(index) {
            const item = this.items[index]
            item.loading = true
            this.$axios.$delete(`/teacher/blog/${item.id}`)
                .then((response) => {
                    this.items.splice(index, 1)
                    this.$toasted.global.successMsg(response.message)
                })
                .finally(() => {
                    item.loading = false
                })
        },
        getData(page = 1) {
            this.$axios.$get('/teacher/blog', {
                params: {
                    page,
                    limit: 10,
                },
            })
                .then((response) => {
                    this.totalCount = response.object.total
                    this.items = response.object.data
                })
        },
    },
}
</script>
