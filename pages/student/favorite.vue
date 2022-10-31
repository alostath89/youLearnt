<template>
    <div class="favorite">
        <v-row>
            <v-col md="4">
                <text-field
                    :value.sync="search"
                    type="text"
                    class="search-input"
                    append-icon="fal fa-search"
                    :rules="{ required: false }"
                    sub-label="search"
                />
            </v-col>
        </v-row>
        <v-row>
            <v-col
                v-for="(item, index) in favoriteList"
                :key="index"
                cols="12"
                md="4"
            >
                <v-card outlined class="px-3 py-5 tut">
                    <v-avatar class="tut-avatar" size="10rem">
                        <v-img
                            src="https://mebhocam.com/wp-content/uploads/2022/04/new_teacher.jpeg"
                            cover
                        />
                        <div class="badge">
                            <div class="content">
                                {{ item.teachers ? item.teachers.level : "" }}
                            </div>
                        </div>
                    </v-avatar>
                    <div>
                        <div class="mt-4 flex-center">
                            <h2 class="me-3">
                                {{ item.full_name }}
                            </h2>
                            <v-img
                                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
                                max-width="20px"
                                class="me-2"
                            />
                            <v-img
                                v-if="item.verifide_identity"
                                :src="require('~/assets/images/verified.png')"
                                max-width="20px"
                            />
                        </div>
                        <div class="my-2">
                            <span>
                                <v-icon small class="me-1"> fal fa-users </v-icon>
                                {{ item.teachers ? item.teachers.student_count : 0 }}
                            </span>
                            <span class="ms-3 me-1">
                                <v-icon
                                    v-for="(star, starIndex) in 5"
                                    :key="starIndex"
                                    small
                                    :class="['me-1', starIndex < item.teachers.rating ? 'yellow--text text--darken-2' : '']"
                                >
                                    fas fa-star
                                </v-icon>
                            </span>
                            <span> {{ item.teachers ? item.teachers.reviews : 0 }} </span>
                        </div>
                        <div class="d-flex align-center my-2">
                            <p class="me-5">
                                {{ $t('speaks') }}
                            </p>
                            <v-chip label class="me-3">
                                <span class="me-3">
                                    En
                                </span>
                                <v-img
                                    contain
                                    src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
                                    width="20px"
                                />
                            </v-chip>
                            <v-chip label>
                                <span class="me-3">
                                    Ar
                                </span>
                                <v-img
                                    contain
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/2560px-Flag_of_Saudi_Arabia.svg.png"
                                    width="20px"
                                />
                            </v-chip>
                        </div>
                        <div class="flex-center">
                            <span class="me-2">
                                {{ $t('hourlyRate') }}
                            </span>
                            <h3 class="primary-bold">
                                10$
                            </h3>
                        </div>
                        <div class="mt-4 d-flex">
                            <actions-btn
                                icon="fal fa-ticket-alt"
                                title="bookNow"
                                class="px-10 me-3"
                            />
                            <actions-tooltip
                                title="chatNow"
                                :fab="false"
                                :x-small="false"
                                icon="fal fa-comment-alt-dots"
                            />
                        </div>
                    </div>
                </v-card>
            </v-col>
        </v-row>
        <v-row v-if="totalCount" class="my-4">
            <v-col cols="12">
                <pagination
                    :total-count="totalCount"
                    @input="getRecommendations($event)"
                />
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    meta: { title: 'favorite' },
    layout: 'dashboard',
    data() {
        return {
            totalCount: 0,
            favoriteList: [],
            search: null,
        }
    },
    fetch() {
        this.getRecommendations()
    },
    methods: {
        getRecommendations(page = 1) {
            this.$axios.$get('student/profile/fav', {
                params: {
                    page,
                    limit: 4,
                    search: this.search,
                },
            })
                .then((response) => {
                    this.favoriteList = response.object.data
                    this.totalCount = response.object.total
                })
        },
    },
}
</script>
