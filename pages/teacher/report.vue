<template>
    <div class="report">
        <v-row>
            <v-col cols="6">
                <v-btn-toggle>
                    <v-btn @click="weekNumber -= 1">
                        <v-icon class="reflect-rtl">
                            fal fa-angle-left
                        </v-icon>
                    </v-btn>

                    <v-btn @click="weekNumber += 1">
                        <v-icon class="reflect-rtl">
                            fal fa-angle-right
                        </v-icon>
                    </v-btn>
                    <v-btn id="disabled-dates" disabled>
                        {{ momentFormatDateTime(startDate) }} - {{ momentFormatDateTime(endDate) }}
                    </v-btn>
                </v-btn-toggle>
            </v-col>
            <v-col cols="6" align="end">
                <actions-btn color="secondary" icon="fal fa-file-download" title="generateReport" />
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12">
                <h3 class="text-h5 primary-bold">
                    Profile report
                </h3>
            </v-col>
            <v-col cols="12" md="4">
                <v-card outlined class="pa-5 reports-stats">
                    <p class="text-h6 primary-bold">
                        Profile views
                    </p>
                    <div class="mt-8">
                        <span class="text-h4">
                            300 views
                        </span>
                        <span class="green--text font-weight-black ms-2">
                            12%
                            <v-icon class="green--text" small> fal fa-chart-line </v-icon>
                        </span>
                        <p class="subtitle-1 accent--text text--lighten-3">
                            Top 10 to view in this days
                        </p>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card outlined class="pa-5 reports-stats">
                    <p class="text-h6 primary-bold">
                        Profile position
                    </p>
                    <div class="mt-8 d-flex align-center">
                        <span class="text-h3 font"> 4.8 </span>
                        <div class="yellow--text text--darken-2 mx-3">
                            <i v-for="(item, index) in 5" :key="index" class="me-2 fas fa-star" />
                        </div>
                        <span> (190) </span>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card outlined class="pa-5 reports-stats">
                    <p class="text-h6 primary-bold">
                        Profile score
                    </p>
                    <div class="d-flex align-center justify-space-between">
                        <div class="subtitle-1 accent--text text--lighten-3">
                            <p>
                                Complete the required
                            </p>
                            <div class="completion-steps">
                                <div>
                                    <v-icon class="me-3" small>
                                        fal fa-plus
                                    </v-icon>
                                    profile description
                                    <span class="green--text font-weight-black ms-3">
                                        12%
                                    </span>
                                </div>
                                <div>
                                    <v-icon class="me-3" small>
                                        fal fa-plus
                                    </v-icon>
                                    Teaching certification
                                    <span class="green--text font-weight-black ms-3">
                                        30%
                                    </span>
                                </div>
                                <div>
                                    <v-icon class="me-3" small>
                                        fal fa-plus
                                    </v-icon>
                                    upload image
                                    <span class="green--text font-weight-black ms-3">
                                        18%
                                    </span>
                                </div>
                            </div>
                        </div>
                        <v-progress-circular
                            :rotate="360"
                            :size="100"
                            :width="12"
                            :value="70"
                            color="green darken-2"
                        >
                            70%
                        </v-progress-circular>
                    </div>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="my-10">
            <v-col cols="12">
                <h3 class="text-h5 primary-bold">
                    Lessons And Students
                </h3>
            </v-col>

            <v-col cols="12" md="4">
                <v-card outlined class="pa-5 lessons">
                    <p class="text-h6 primary-bold mb-5">
                        Hourly rate
                    </p>
                    <div>
                        <div v-for="(item, index) in 2" :key="index" class="lessons-block">
                            <span class="lang-subject">
                                <i class="fal fa-book me-3" />
                                Arabic
                            </span>
                            <span class="text-h5"> 5.5$ / H </span>
                        </div>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card outlined class="pa-5 lessons">
                    <p class="text-h6 primary-bold">
                        Total Students
                    </p>
                    <div class="d-flex align-center mt-3 justify-space-between">
                        <div>
                            <span class="text-h4">
                                300 views
                            </span>
                            <span class="green--text font-weight-black ms-2">
                                12%
                                <v-icon class="green--text" small> fal fa-chart-line </v-icon>
                            </span>
                            <div class="mt-3 d-flex">
                                <div class="me-5">
                                    <v-icon color="green" class="me-1" x-small>
                                        fas fa-circle
                                    </v-icon>
                                    New
                                </div>
                                <div>
                                    <v-icon class="me-1" x-small>
                                        fas fa-circle
                                    </v-icon>
                                    Old
                                </div>
                            </div>
                        </div>
                        <v-progress-circular
                            :rotate="360"
                            :size="100"
                            :width="12"
                            :value="70"
                            color="green darken-2"
                        >
                            70%
                        </v-progress-circular>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card outlined class="pa-5 lessons">
                    <p class="text-h6 primary-bold">
                        Availability
                    </p>
                    <div class="d-flex align-center mt-3 justify-space-between">
                        <div>
                            <span class="text-h4">
                                300 views
                            </span>
                            <span class="green--text font-weight-black ms-2">
                                12%
                                <v-icon class="green--text" small> fal fa-chart-line </v-icon>
                            </span>
                            <div class="mt-3 d-flex">
                                <div class="me-5">
                                    <v-icon color="blue darken-3" class="me-1" x-small>
                                        fas fa-circle
                                    </v-icon>
                                    New
                                </div>
                                <div>
                                    <v-icon class="me-1" x-small>
                                        fas fa-circle
                                    </v-icon>
                                    Old
                                </div>
                            </div>
                        </div>
                        <v-progress-circular
                            :rotate="360"
                            :size="100"
                            :width="12"
                            :value="70"
                            color="blue darken-3"
                        >
                            70%
                        </v-progress-circular>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" md="8">
                <v-card outlined class="pa-5 h-100">
                    <h1 class="text-h1" />
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-row>
                    <v-col cols="12">
                        <v-card outlined class="pa-5 side-lessons">
                            <p class="text-h6 primary-bold lessons-dropdown mb-10">
                                Canceled lessons

                                <Menu icon="fal fa-book" btn-class="lessons-dropdown" :items="[{ title: 'Arabic' }, { title: 'English' }]" title="Lessons" />
                            </p>
                            <span class="text-h4">
                                10 Lessons
                            </span>
                        </v-card>
                    </v-col>
                    <v-col cols="12">
                        <v-card outlined class="pa-5">
                            <p class="text-h6 primary-bold mb-10">
                                Absences
                            </p>
                            <span class="text-h4">
                                15 Students
                            </span>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <h3 class="text-h5 primary-bold">
                    Achievements
                </h3>
            </v-col>
            <v-col cols="12" md="4">
                <v-card outlined class="pa-5 achievements">
                    <p class="text-h6 primary-bold">
                        Total Income Earned
                    </p>
                    <div class="mt-8">
                        <span class="text-h4">
                            450$
                        </span>
                        <span class="green--text font-weight-black ms-2">
                            12%
                            <v-icon class="green--text" small> fal fa-chart-line </v-icon>
                        </span>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card outlined class="pa-5 achievements">
                    <p class="text-h6 primary-bold">
                        Total hours
                    </p>
                    <div class="mt-8">
                        <span class="text-h4">
                            80 Hours
                        </span>
                        <span class="green--text font-weight-black ms-2">
                            12%
                            <v-icon class="green--text" small> fal fa-chart-line </v-icon>
                        </span>
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" md="4">
                <v-card outlined class="pa-5 achievements">
                    <p class="text-h6 primary-bold">
                        Total reviews
                    </p>
                    <div class="mt-8 d-flex align-center">
                        <span class="text-h3 font"> 4.8 </span>
                        <div class="yellow--text text--darken-2 mx-3">
                            <i v-for="(item, index) in 5" :key="index" class="me-2 fas fa-star" />
                        </div>
                        <span> (190) </span>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import moment from 'moment'

export default {
    meta: { title: 'Report' },
    layout: 'dashboard',
    data() {
        return {
            wallet: null,
            total_hour: null,
            total_student: null,

            weekNumber: 0,
        }
    },
    fetch() {
        this.$axios.$get('/teacher/profile/dashboard')
            .then((response) => {
                /* this.wallet = response.object.wallet
                this.total_hour = response.object.total_hour
                this.total_student = response.object.total_student */
            })
    },
    computed: {
        startDate() {
            return moment().startOf('isoWeek')
                .add(this.weekNumber, 'week')
        },
        endDate() {
            return moment(this.startDate).add(7, 'day')
        },
    },
}
</script>
