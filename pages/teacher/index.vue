<template>
    <div class="index">
        <v-row>
            <v-col cols="12" md="4">
                <div class="stats rounded">
                    <div>
                        <p class="text-h5 mb-4">
                            {{ $t('totalStudents') }}
                        </p>
                        <p class="text-h3 primary-bold">
                            {{ total_student }}
                        </p>
                    </div>

                    <i class="fal fa-users fa-5x" />
                </div>
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
            total_student: 0,
            books: [],
        }
    },
    fetch() {
        this.$axios.$get('/teacher/profile/dashboard')
            .then((response) => {
                this.wallet = response.object.wallet
                this.total_hour = response.object.total_hour
                this.total_student = response.object.total_student
            })

        this.$axios.$get('/teacher/profile/book')
            .then((response) => {
                this.books = response.object.books
            })
    },
}
</script>
