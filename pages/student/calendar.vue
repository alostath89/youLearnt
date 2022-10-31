<template>
    <div class="calender">
        <v-row class="mb-5">
            <v-col class="d-flex justify-space-between align-center">
                <h2 class="primary-bold text-h4">
                    {{ $t('calendar') }}
                </h2>

                <actions-btn title="addNewBook" icon="fal fa-plus" @click="isDialogOpen = true" />
            </v-col>
        </v-row>
        <v-row>
            <v-col md="3">
                <v-date-picker
                    v-model="dates"
                    full-width
                    range
                />
            </v-col>
            <v-col md="9">
                <div class="mb-3 d-flex justify-space-between align-center">
                    <actions-btn
                        icon="fal fa-angle-left"
                        title="previous"
                        color="secondary"
                        @click="$refs.calendar.prev()"
                    />
                    <v-btn
                        color="secondary"
                        depressed
                        @click="$refs.calendar.next()"
                    >
                        {{ $t("next") }}
                        <v-icon class="ms-3">
                            fal fa-angle-right
                        </v-icon>
                    </v-btn>
                </div>
                <v-calendar
                    ref="calendar"
                    v-model="value"
                    :events="events"
                    type="week"
                    :event-overlap-threshold="30"
                />
            </v-col>
        </v-row>

        <InPagesBook
            ref="formDialog"
            :key="dialogId"
            :dialog-id="dialogId"
            :is-dialog-open="isDialogOpen"
            @closeDialog="closeDialog"
        />
    </div>
</template>

<script>
export default {
    meta: { title: null },
    layout: 'dashboard',
    data() {
        return {
            dialogId: null,
            isDialogOpen: false,
            dates: [],
            value: null,
            events: [
                {
                    name: 'Meeting with Muhammad',
                    start: new Date(),
                    end: new Date(),
                    color: 'red',

                    // timed: true,
                },
            ],
        }
    },
    methods: {
        closeDialog() {
            this.$refs.formDialog.reset()
            this.isDialogOpen = false
        },
    },
}
</script>
