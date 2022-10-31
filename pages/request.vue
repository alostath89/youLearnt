<template>
    <div>
        <v-card outlined class="pa-3" elevation="1">
            <div class="d-flex justify-space-between">
                <div class="d-flex align-center">
                    <h2 class="primary-bold">
                        I need learn French
                    </h2>
                    <span class="ms-3"> 2 Weeks ago </span>
                </div>
                <h2>
                    20$ - 100$
                </h2>
            </div>
            <i class="fal fa-book me-2 mt-3 mb-4" /> Arabic

            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores velit a itaque odit ipsum dolores dolore omnis eveniet facere ad veniam vel placeat quasi inventore minus, debitis at repudiandae doloremque! </p>
        </v-card>

        <h2 class="secondary--text mt-10 mb-3">
            {{ $t('offersMade') }}
        </h2>
        <v-card
            v-for="(item, index) in 5"
            :key="index"
            class="pa-3 offers"
            outlined
            :tile="index != 0"
        >
            <div class="d-flex justify-space-between align-center mb-5">
                <div class="d-flex align-center">
                    <v-avatar
                        color="primary"
                        size="80"
                        tile
                        class="me-3"
                    >
                        <img src="https://cdn.vuetifyjs.com/images/john.jpg">
                    </v-avatar>
                    <div class="d-flex flex-column">
                        <div class="d-flex mb-5">
                            <h3 class="primary-bold me-3">
                                Bara teest
                            </h3>
                            <v-img
                                :src="require('~/assets/images/verified.png')"
                                max-width="20px"
                            />
                        </div>
                        <div>
                            <i class="fal fa-book me-2" /> Arabic
                            <i class="ms-3 fas fa-star yellow--text text--darken-2" /> 4.9
                        </div>
                    </div>
                </div>
                <h2>
                    250$
                </h2>
            </div>
            <v-row>
                <v-col md="8" cols="12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi obcaecati quibusdam libero aliquid, repellat voluptatibus sed quam eveniet aut? Cumque provident culpa repellat, eaque nisi autem possimus expedita, rem in dolores recusandae ratione dolorem perspiciatis cum eligendi aspernatur, tempora iusto rerum eius nobis debitis vel ad. Esse mollitia animi, dolore tenetur quasi ducimus iure modi, cum dolorum quis omnis quod.
                </v-col>
                <v-col md="4" cols="12" class="d-flex flex-column align-end">
                    <actions-btn icon="fal fa-check-circle" color="green darken-2 white--text" title="acceptTheOffer" class="mb-3" />

                    <actions-btn icon="fal fa-comment-alt-lines" class="px-5" color="" title="sendMessage" />
                </v-col>
            </v-row>
        </v-card>
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
            totalCount: 0,
            items: [],
        }
    },
    fetch() {
        this.getData()
    },
    methods: {
        getData(page = 1) {
            this.$axios.$get('/search/student', {
                params: {
                    page,
                    limit: 10,
                },
            })
                .then((response) => {
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
    }
}
</script>
