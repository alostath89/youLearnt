<template>
    <div class="community">
        <v-row class="mb-5">
            <v-col class="d-flex justify-space-between align-center">
                <h2 class="primary-bold text-h4">
                    {{ $t('community') }}
                </h2>

                <actions-btn color="secondary" title="addNewQuestion" icon="fal fa-plus" @click="$router.push({ name: 'teacher-community-id', params: { id: 0 } })" />
            </v-col>
        </v-row>

        <v-expansion-panels accordion>
            <v-expansion-panel v-for="(item, index) in items" :key="index">
                <v-expansion-panel-header>
                    <div class="d-flex justify-space-between align-center">
                        <div>
                            <p class="primary--text">
                                {{ item.title }}
                            </p>
                            <div class="mt-3">
                                <v-chip
                                    v-for="(tag, tagIndex) in item.tags"
                                    :key="tagIndex"
                                    color="purple lighten-1 white--text"
                                    class="me-3"
                                    label
                                    small
                                >
                                    {{ tag.name }}
                                </v-chip>
                            </div>
                        </div>
                        <actions-tooltip
                            :with-confirm="true"
                            title="delete"
                            :loading="item.loading"
                            color="secondary"
                            class="me-3"
                            icon="fal fa-trash"
                            :outlined="true"
                            @confirmed="confirmed(index)"
                        />
                    </div>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <div>
                        {{ item.description }}
                    </div>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>

        <v-row v-if="totalCount" class="mt-4">
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
            this.$axios.$delete(`/teacher/community/${item.id}`)
                .then((response) => {
                    this.items.splice(index, 1)
                    this.$toasted.global.successMsg(response.message)
                })
                .finally(() => {
                    item.loading = false
                })
        },
        getData(page = 1) {
            this.$axios.$get('/teacher/community', {
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
