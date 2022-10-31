<template>
    <div class="index student">
        <v-row>
            <v-col cols="12">
                <v-alert
                    border="left"
                    color="#FFCE0A"
                    dismissible
                >
                    <v-icon class="me-3">
                        fal fa-exclamation-circle
                    </v-icon>
                    I'm an alert with a border left type info
                </v-alert>
            </v-col>
            <v-col cols="12" md="4">
                <div class="stats rounded">
                    <div>
                        <p class="text-h5 mb-4">
                            {{ $t('totalHours') }}
                        </p>
                        <p class="text-h3 primary-bold">
                            {{ total_hour }}
                        </p>
                    </div>

                    <i class="fal fa-book fa-5x" />
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div class="stats rounded">
                    <div>
                        <p class="text-h5 mb-4">
                            {{ $t('wallet') }}
                        </p>
                        <p class="text-h3 primary-bold">
                            {{ wallet }}$
                        </p>
                    </div>

                    <i class="fal fa-wallet fa-5x" />
                </div>
            </v-col>
            <v-col cols="12" md="4">
                <div class="stats rounded">
                    <div>
                        <p class="text-h5 mb-4 pe-5">
                            {{ $t('studentLevel') }}
                        </p>
                        <div>
                            <v-progress-linear value="15" />
                            <p class="text-h5 mt-2 primary-bold">
                                {{ levelName }}
                            </p>
                        </div>
                    </div>

                    <i class="fal fa-graduation-cap fa-5x" />
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="8">
                <v-card outlined class="pa-4 notifications">
                    <h4 class="text-h5 primary-bold">
                        {{ $t('notifications') }}
                    </h4>

                    <div v-for="(item, index) in 7" :key="index" class="notifications-block">
                        <v-avatar class="me-5">
                            <v-icon>
                                fas fa-star
                            </v-icon>
                        </v-avatar>
                        <div>
                            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, ducimus doloribus natus excepturi necessitatibus incidunt expedita nisi cupiditate, dignissimos illo at, dolorem et impedit rem? </p>
                            <p class="subtitle-1 accent--text text--lighten-3">
                                05 Mins Ago
                            </p>
                        </div>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card outlined class="pa-4 calender">
                    <h4 class="text-h5 primary-bold">
                        {{ $t('upcomingSchedule') }}
                    </h4>

                    <div v-for="(item, index) in books" :key="index" class="calender-block">
                        <p class="primary--text">
                            <i class="fal fa-clock me-2" />
                            {{ momentFormatDateTime(item.created_at) }}
                        </p>
                        <div class="details ps-3">
                            <p class="mb-3">
                                <i class="fal fa-user me-2" />
                                {{ $t('type') }}: {{ item.type }}
                            </p>
                            <p>
                                <i class="fal fa-book me-2" />
                                {{ $t('title') }}: {{ item.title }}
                            </p>
                        </div>
                    </div>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="mt-5">
                <h4 class="text-h5 primary-bold">
                    {{ $t('recommendation') }}
                </h4>
            </v-col>

            <v-col
                v-for="(item, index) in recommendations"
                :key="index"
                cols="12"
                md="6"
            >
                <v-card class="recommendation" outlined>
                    <v-img
                        :src="item.image_url"
                        cover
                        height="20rem"
                    />
                    <div class="recommendation-details">
                        <h4 class="text-h5 secondary--text font-weight-bold">
                            {{ item.full_name }}
                        </h4>
                        <v-chip label color="#E3DCFF">
                            <v-img
                                cover
                                :src="require('~/assets/images/recommendation-badge.png')"
                                width="20px"
                                class="me-3"
                            />
                            <span class="primary--text">
                                test 1abs
                            </span>
                        </v-chip>
                        <div class="recommendation-rating">
                            <v-icon class="yellow--text text--darken-2 me-2">
                                fas fa-star
                            </v-icon>
                            <h4> 4.9 </h4>
                        </div>
                    </div>
                    <div class="recommendation-lang px-4 mb-3">
                        <div class="d-flex align-center">
                            <p class="me-7">
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
                        <v-btn
                            color="primary"
                            depressed
                            @click="$refs.calendar.next()"
                        >
                            {{ $t("moreDetails") }}
                            <v-icon class="ms-3">
                                fal fa-angle-right
                            </v-icon>
                        </v-btn>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" class="flex-center">
                <actions-btn
                    color="secondary"
                    title="findTutors"
                    icon="fal fa-search"
                />
            </v-col>
            <v-row v-if="totalCount" class="my-4">
                <v-col cols="12">
                    <pagination
                        :total-count="totalCount"
                        @input="getRecommendations($event)"
                    />
                </v-col>
            </v-row>
        </v-row>
    </div>
</template>

<script>
export default {
    meta: { title: 'home' },
    layout: 'dashboard',
    data() {
        return {
            wallet: 0,
            total_hour: 0,
            levelName: null,
            totalCount: 0,
            books: [],
            recommendations: [],
        }
    },
    fetch() {
        this.$axios.$get('/student/profile/books')
            .then((response) => {
                this.books = response.object.books
            })

        this.getRecommendations()
    },
    methods: {
        getRecommendations(page = 1) {
            this.$axios.$get('/student/profile', {
                params: {
                    page,
                    limit: 4,
                },
            })
                .then((response) => {
                    this.wallet = response.list.wallet
                    this.total_hour = response.list.total_hour
                    this.levelName = response.list.level

                    this.recommendations = response.list.recommendations.data
                    this.totalCount = response.list.recommendations.total
                })
        },
    },
}
</script>
