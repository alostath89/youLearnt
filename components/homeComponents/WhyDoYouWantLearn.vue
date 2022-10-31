<template>
    <div class="why-do my-16">
        <v-container>
            <div class="text-center mx-auto mb-6" :style="$vuetify.breakpoint.mdAndDown ? true : 'width: 60%'">
                <h2 class="mb-4 textdark--text font-weight-medium">
                    What do you want to learn today?
                </h2>
                <p class="textmuted--text">
                    YouLearnt saves you the trouble of looking for a tutor to teach you or someone you care about, and we made it easy. We collected for you all specialties in the world here. If you don't find what you want, you can ask about the person with the experience you want.
                </p>
            </div>
            <v-row>
                <v-col sm="2" cols="6" v-for="n in 6" :key="n">
                    <category-card />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped>

</style>
