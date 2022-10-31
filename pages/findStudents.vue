<template>
    <div>
        <v-row justify="center">
            <v-col cols="12" md="4" class="text-center">
                <h2 class="display-2">
                    {{ $t('gettingStartedGuide') }}
                </h2>
                <p class="my-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore esse excepturi maxime itaque nesciunt alias facilis hic praesentium soluta voluptatibus tempore illo adipisci porro, impedit voluptate dignissimos sequi ipsa.
                </p>
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

        <v-row justify="center">
            <v-col cols="12" md="9">
                <v-expansion-panels v-model="activeCollapse" accordion>
                    <v-expansion-panel
                        v-for="(item, index) in items"
                        :key="index"
                    >
                        <v-card outlined>
                            <v-expansion-panel-header>
                                <div class="pe-4">
                                    <div class="d-flex justify-space-between">
                                        <div class="d-flex align-center">
                                            <h2 class="primary-bold me-3">
                                                {{ item.title }}
                                            </h2>
                                            <span>
                                                <i class="fal fa-book me-2" />
                                                {{ item.subject ? item.subject.lang_name : "" }}
                                            </span>
                                        </div>
                                        <h2> {{ item.start_price }}$ - {{ item.end_price }}$ </h2>
                                    </div>
                                    <div class="mt-3 d-flex">
                                        <v-avatar
                                            color="primary"
                                            size="50"
                                            class="me-3"
                                        >
                                            <img :src="item.student ? item.student.image_url : ''">
                                        </v-avatar>
                                        <div class="d-flex align-center">
                                            <h3> {{ item.student ? item.student.full_name : '' }} </h3>
                                            <v-img
                                                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
                                                max-width="20px"
                                                height="10px"
                                                class="ms-2"
                                            />
                                        </div>
                                    </div>
                                    <div class="my-3">
                                        {{ momentFormatDateTime(item.updated_at) }}
                                    </div>
                                    <div>
                                        {{ item.description }}
                                    </div>
                                </div>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content class="offers">
                                <form-observer ref="formObserver" form-class="row" @submit="submit">
                                    <v-col cols="12">
                                        <h6 class="text-h6">
                                            {{ $t('addOffer') }}
                                        </h6>
                                    </v-col>
                                    <v-col cols="4">
                                        <text-field
                                            :value.sync="item.form.hourlyRate"
                                            type="text"
                                            :rules="{ required: true }"
                                            sup-label="hourlyRate"
                                        />
                                    </v-col>
                                    <v-col cols="12">
                                        <text-area
                                            :value.sync="item.form.offerDetails"
                                            type="text"
                                            :rules="{ required: true }"
                                            sup-label="offerDetails"
                                        />
                                    </v-col>
                                    <v-col v-if="errors" cols="12">
                                        <Errors :errors="errors" />
                                    </v-col>
                                    <v-col cols="12" class="d-flex justify-end">
                                        <v-btn
                                            :loading="loading"
                                            type="submit"
                                            color="secondary"
                                            class="px-10 py-6 text-h6"
                                        >
                                            {{ $t('addOffer') }}
                                        </v-btn>
                                    </v-col>
                                </form-observer>
                            </v-expansion-panel-content>
                        </v-card>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
            <v-col v-if="activeCollapse > -1" cols="12" md="3">
                <v-card outlined class="pa-4 d-flex justify-center flex-column align-center">
                    <v-avatar
                        color="primary"
                        size="150"
                        class="me-3"
                    >
                        <img :src="items[activeCollapse] && items[activeCollapse].student ? items[activeCollapse].student.image_url : ''">
                    </v-avatar>

                    <div class="d-flex align-center mt-4">
                        <h3> {{ items[activeCollapse] && items[activeCollapse].student ? items[activeCollapse].student.full_name : '' }} </h3>
                        <v-img
                            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
                            max-width="20px"
                            height="10px"
                            class="ms-2"
                        />
                    </div>
                </v-card>
            </v-col>
        </v-row>
        <v-row v-if="totalCount" class="my-4">
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
    layout: 'landboard',
    data() {
        return {
            items: [],
            totalCount: 0,
            search: null,
            errors: null,
            loading: false,
            activeCollapse: null,
        }
    },
    fetch() {
        this.getData()
    },
    methods: {
        submit() {

        },
        getData(page = 1) {
            this.$axios.$get('/search/student', {
                params: {
                    page,
                    limit: 10,
                },
            })
                .then((response) => {
                    console.log(response.object)

                    this.totalCount = response.object.total
                    this.items = response.object.data.map((item) => {
                        item.form = {
                            hourlyRate: null,
                            offerDetails: null,
                        }
                        return item
                    })
                })
        },
    },
}
</script>
