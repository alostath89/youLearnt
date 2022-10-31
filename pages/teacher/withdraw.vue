<template>
    <div class="withdraw">
        <v-card class="pa-3" outlined>
            <h3 class="mb-3 text-h5 primary-bold">
                Recent financial transactions
            </h3>
            <client-table
                :show-button="false"
                :show-search="false"
                :items="items"
                :headers="headers"
            >
                <template #[`item.created_at`]="row">
                    {{ momentFormatDateTime(row.item.created_at) }}
                </template>
            </client-table>
        </v-card>

        <v-row class="mt-3">
            <v-col cols="12" md="4">
                <v-card outlined class="pa-3">
                    <h3 class="text-h5 primary-bold">
                        Earnings
                    </h3>
                    <div class="d-flex align-center flex-column">
                        <p> Your earnings this month </p>
                        <h3 class="text-h4 my-3">
                            $180
                        </h3>
                        <div class="text-caption mb-3">
                            05 Jun 2021 at 11:00 PM
                        </div>
                        <actions-btn
                            icon="fal fa-wallet"
                            color="secondary"
                            title="withdrawAllEarnings"
                        />
                    </div>
                </v-card>
            </v-col>
            <v-col cols="12" md="8">
                <v-card outlined class="pa-3">
                    <div class="mb-3 d-flex justify-space-between align-center">
                        <h3 class="text-h5 primary-bold">
                            Last earnings
                        </h3>
                        <p class="text-caption">
                            09/08/2022
                        </p>
                    </div>
                    <div class="mt-3">
                        <div v-for="(item, index) in 5" :key="index" class="earning-block">
                            <div class="details">
                                <i class="fas fa-dollar-sign me-3" />
                                <p> Lorem ipsum dolor sit amet consectetur. </p>
                            </div>

                            <div class="primary-bold">
                                +50$
                            </div>
                        </div>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    meta: { title: 'withdraw' },
    layout: 'dashboard',
    data() {
        return {
            headers: [
                {
                    text: this.$t('date'),
                    value: 'created_at',
                },
                {
                    text: this.$t('transactionNumber'),
                    value: 'number',
                },
                {
                    text: this.$t('withdrawalMethod'),
                    value: 'payment_method',
                },
                {
                    text: this.$t('amount'),
                    value: 'total',
                },
                {
                    text: this.$t('status'),
                    value: 'status',
                },
            ],
            items: [],
        }
    },
    fetch() {
        this.getData()
    },
    methods: {
        getData() {
            this.$axios.$get('/teacher/profile/withdrow')
                .then((response) => {
                    this.items = response.object.data
                })
        },
    },
}
</script>
