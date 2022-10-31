<template>
    <div class="background">
        <v-tabs
            grow
            background-color="transparent"
            @change="handleFormComponent"
        >
            <v-tab
                v-for="(item, index) in items"
                :key="index"
            >
                {{ item }}
            </v-tab>

            <v-tab-item>
                <v-card outlined rounded="0">
                    <div class="my-3 pa-3 d-flex justify-space-between align-center">
                        <h3> {{ $t('totalCertifications') }}: {{ certificationTotalCount }} </h3>
                        <actions-btn
                            title="addNew"
                            icon="fal fa-plus"
                            @click="isDialogOpen = true"
                        />
                    </div>
                    <v-expansion-panels accordion>
                        <v-expansion-panel
                            v-for="(item, i) in certification"
                            :key="i"
                        >
                            <v-expansion-panel-header>
                                <div class="d-flex align-center">
                                    <p>
                                        {{ item.subject ? item.subject.lang_name : '' }}
                                    </p>
                                    <v-icon class="mx-5">
                                        fal fa-grip-lines-vertical
                                    </v-icon>
                                    <v-chip
                                        color="primary"
                                        small
                                        label
                                        text-color="white"
                                    >
                                        <v-icon class="me-3" x-small>
                                            fal fa-tag
                                        </v-icon>
                                        {{ item.issued_by }}
                                    </v-chip>
                                    <v-spacer />
                                    <actions-tooltip
                                        :outlined="true"
                                        title="delete"
                                        :with-confirm="true"
                                        color="secondary"
                                        icon="fal fa-trash"
                                        class="me-2"
                                        @confirmed="confirmed('certification', i)"
                                    />
                                    <actions-tooltip
                                        :outlined="true"
                                        title="edit"
                                        icon="fal fa-pen"
                                        @click="form = item; isDialogOpen = true"
                                    />
                                </div>
                            </v-expansion-panel-header>

                            <v-expansion-panel-content>
                                <v-card outlined class="pa-5">
                                    <v-row class="certificate">
                                        <v-col cols="12" md="9" class="content">
                                            <v-row>
                                                <v-col cols="12" md="6" class="mb-5">
                                                    <h3>
                                                        {{ $t('subject') }}
                                                    </h3>
                                                    <p> {{ item.subject ? item.subject.lang_name : '' }} </p>
                                                </v-col>
                                                <v-col cols="12" md="6" class="mb-5">
                                                    <h3>
                                                        {{ $t('issuedBy') }}
                                                    </h3>
                                                    <p> {{ item.issued_by }} </p>
                                                </v-col>
                                                <v-col cols="12" md="6">
                                                    <h3>
                                                        {{ $t('issuedDate') }}
                                                    </h3>
                                                    <p> {{ item.issued_date }} </p>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                        <v-col cols="12" md="3" class="image">
                                            <v-img height="150" contain :src="item.image_url" />
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>

                    <v-row v-if="certificationTotalCount" class="my-4">
                        <v-col cols="12">
                            <pagination
                                :total-count="certificationTotalCount"
                                @input="getCertifications($event)"
                            />
                        </v-col>
                    </v-row>
                </v-card>
            </v-tab-item>

            <v-tab-item>
                <v-card outlined rounded="0">
                    <div class="my-3 pa-3 d-flex justify-space-between align-center">
                        <h3> {{ $t('totalEducation') }}: {{ educationTotalCount }} </h3>
                        <actions-btn
                            title="add new"
                            icon="fal fa-plus"
                            @click="isDialogOpen = true"
                        />
                    </div>
                    <v-expansion-panels accordion>
                        <v-expansion-panel
                            v-for="(item, i) in education"
                            :key="i"
                        >
                            <v-expansion-panel-header>
                                <div class="d-flex align-center">
                                    <p class="title">
                                        {{ item.specialization }}
                                    </p>
                                    <v-icon class="mx-5">
                                        fal fa-grip-lines-vertical
                                    </v-icon>
                                    <v-chip
                                        color="primary"
                                        small
                                        label
                                        text-color="white"
                                    >
                                        <v-icon class="me-3" x-small>
                                            fal fa-university
                                        </v-icon>
                                        {{ item.university }}
                                    </v-chip>
                                    <v-spacer />
                                    <actions-tooltip
                                        :outlined="true"
                                        title="delete"
                                        :with-confirm="true"
                                        color="secondary"
                                        icon="fal fa-trash"
                                        class="me-2"
                                        @confirmed="confirmed('education', i)"
                                    />
                                    <actions-tooltip
                                        :outlined="true"
                                        title="edit"
                                        icon="fal fa-pen"
                                        @click="form = item; isDialogOpen = true"
                                    />
                                </div>
                            </v-expansion-panel-header>

                            <v-expansion-panel-content>
                                <v-card outlined class="pa-5">
                                    <v-row class="certificate">
                                        <v-col cols="12" md="9" class="content">
                                            <v-row>
                                                <v-col cols="12" md="6" class="mb-5">
                                                    <h3>
                                                        {{ $t('specialization') }}
                                                    </h3>
                                                    <p> {{ item.specialization }} </p>
                                                </v-col>
                                                <v-col cols="12" md="6" class="mb-5">
                                                    <h3>
                                                        {{ $t('degree') }}
                                                    </h3>
                                                    <p> {{ item.degree }} </p>
                                                </v-col>
                                                <v-col cols="12" md="6" class="mb-5">
                                                    <h3>
                                                        {{ $t('university') }}
                                                    </h3>
                                                    <p> {{ item.university }} </p>
                                                </v-col>
                                                <v-col cols="12" md="6">
                                                    <h3>
                                                        {{ $t('date') }}
                                                    </h3>
                                                    <p> {{ item.start_at }} || {{ item.end_at }} </p>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                        <v-col cols="12" md="3" class="image">
                                            <v-img
                                                height="150"
                                                contain
                                                :src="item.image_url"
                                            />
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>

                    <v-row v-if="educationTotalCount" class="my-4">
                        <v-col cols="12">
                            <pagination
                                :total-count="educationTotalCount"
                                @input="getEducation($event)"
                            />
                        </v-col>
                    </v-row>
                </v-card>
            </v-tab-item>

            <v-tab-item>
                <v-card outlined rounded="0">
                    <div class="my-3 pa-3 d-flex justify-space-between align-center">
                        <h3> {{ $t('totalWorkExperience') }}: {{ certificationTotalCount }} </h3>
                        <actions-btn title="add new" icon="fal fa-plus" @click="isDialogOpen = true" />
                    </div>
                    <v-expansion-panels accordion>
                        <v-expansion-panel
                            v-for="(item, i) in experience"
                            :key="i"
                        >
                            <v-expansion-panel-header>
                                <div class="d-flex align-center">
                                    <p>
                                        {{ item.position }}
                                    </p>
                                    <v-icon class="mx-5">
                                        fal fa-grip-lines-vertical
                                    </v-icon>
                                    <v-chip
                                        color="primary"
                                        small
                                        label
                                        text-color="white"
                                    >
                                        <v-icon class="me-3" x-small>
                                            fal fa-briefcase
                                        </v-icon>
                                        {{ item.company }}
                                    </v-chip>
                                    <v-spacer />
                                    <actions-tooltip
                                        :outlined="true"
                                        title="delete"
                                        :with-confirm="true"
                                        color="secondary"
                                        icon="fal fa-trash"
                                        class="me-2"
                                        @confirmed="confirmed('experience', i)"
                                    />
                                    <actions-tooltip
                                        :outlined="true"
                                        title="edit"
                                        icon="fal fa-pen"
                                        @click="form = item; isDialogOpen = true"
                                    />
                                </div>
                            </v-expansion-panel-header>

                            <v-expansion-panel-content>
                                <v-card outlined class="pa-5">
                                    <v-row class="certificate">
                                        <v-col cols="12" md="4">
                                            <h3>
                                                {{ $t('position') }}
                                            </h3>
                                            <p> {{ item.position }} </p>
                                        </v-col>
                                        <v-col cols="12" md="4">
                                            <h3>
                                                {{ $t('company') }}
                                            </h3>
                                            <p> {{ item.company }} </p>
                                        </v-col>
                                        <v-col cols="12" md="4">
                                            <h3>
                                                {{ $t('workDates') }}
                                            </h3>
                                            <p> {{ item.start_at }} || {{ item.end_at }} </p>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-row v-if="experienceTotalCount" class="my-4">
                            <v-col cols="12">
                                <pagination
                                    :total-count="experienceTotalCount"
                                    @input="getExperience($event)"
                                />
                            </v-col>
                        </v-row>
                    </v-expansion-panels>
                </v-card>
            </v-tab-item>
        </v-tabs>

        <component
            :is="component"
            ref="formDialog"
            :is-dialog-open="isDialogOpen"
            :form="form"
            @closeDialog="closeDialog"
        />
    </div>
</template>

<script>
export default {
    meta: { title: 'background' },
    layout: 'dashboard',
    data() {
        return {
            component: 'InPagesCertificate',
            tab: 0,
            isDialogOpen: false,
            certification: [],
            certificationTotalCount: 0,
            education: [],
            educationTotalCount: 0,
            experience: [],
            experienceTotalCount: 0,
            items: ['Teaching certification', 'Education', 'Work experience'],
            form: {},
        }
    },
    fetch() {
        this.getCertifications()
        this.getEducation()
        this.getExperience()
    },
    methods: {
        confirmed(where, index) {
            const item = this[where][index]
            item.loading = true
            this.$axios.$delete(`/teacher/profile/${where}/${item.id}`)
                .then((response) => {
                    this[where].splice(index, 1)
                    this.$toasted.global.successMsg(response.message)
                })
                .finally(() => {
                    item.loading = false
                })
        },
        getCertifications(page = 1) {
            this.$axios.$get('/teacher/profile/certification', {
                params: {
                    page,
                    limit: 10,
                },
            })
                .then((response) => {
                    this.certificationTotalCount = response.object.total
                    this.certification = response.object.data
                })
        },
        getEducation(page = 1) {
            this.$axios.$get('/teacher/profile/education', {
                params: {
                    page,
                    limit: 10,
                },
            })
                .then((response) => {
                    this.educationTotalCount = response.object.total
                    this.education = response.object.data
                })
        },
        getExperience(page = 1) {
            this.$axios.$get('/teacher/profile/experience', {
                params: {
                    page,
                    limit: 10,
                },
            })
                .then((response) => {
                    this.experienceTotalCount = response.object.total
                    this.experience = response.object.data
                })
        },
        handleFormComponent(val) {
            if (val === 0) {
                this.component = 'InPagesCertificate'
                this.form = {
                    issued_date: null,
                    issued_by: null,
                    subject_id: null,
                    certification_image: null,
                }
            }
            if (val === 1) {
                this.component = 'InPagesEducation'
                this.form = {
                    university: null,
                    specialization: null,
                    degree: null,
                    degree_type: null,
                    start_at: null,
                    end_at: null,
                    education_image: null,
                }
            }
            if (val === 2) {
                this.component = 'InPagesExp'
                this.form = {
                    company: null,
                    position: null,
                    start_at: null,
                    end_at: null,
                }
            }
        },

        closeDialog(data) {
            this.$refs.formDialog.reset()
            this.isDialogOpen = false

            if (data) {
                const matched = this[data.where].findIndex(x => x.id === data.payload.id)
                if (matched === -1) this[data.where].push(data.payload)
                else this[data.where].splice(matched, 1, data.payload)
            }
        },
    },
}
</script>
