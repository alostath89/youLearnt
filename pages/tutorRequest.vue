<template>
    <v-card outlined class="pa-3">
        <form-observer ref="formObserver" form-class="row" @submit="submit">
            <v-col cols="12">
                <h6 class="text-h5 secondary--text">
                    {{ $t('addOffer') }}
                </h6>
            </v-col>
            <v-col cols="12" md="6">
                <text-field
                    :value.sync="form.title"
                    type="text"
                    :rules="{ required: true }"
                    sup-label="title"
                />
            </v-col>
            <v-col cols="12" md="6">
                <select-field
                    :value.sync="form.expectedBudget"
                    :rules="{ required: true }"
                    :items="expectedBudgetsArray"
                    sup-label="expectedBudget"
                />
            </v-col>
            <v-col cols="12">
                <text-area
                    :value.sync="form.requestDetails"
                    type="text"
                    :rules="{ required: true }"
                    sup-label="requestDetails"
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
    </v-card>
</template>

<script>
export default {
    layout: 'landboard',
    data() {
        return {
            loading: false,
            errors: null,
            form: {
                title: null,
                expectedBudget: null,
                requestDetails: null,
            },
        }
    },
    methods: {
        submit() {

        },
    },
}
</script>
