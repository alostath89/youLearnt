<template>
    <div class="blog py-10">
        <div class="d-flex justify-space-between mb-10">
            <p class="text-h4 text-h5">Results</p>
            <div class="d-flex bg-white grid-btns rounded-lg">                
                <button @click="grid = true" :class="[grid ? 'active' : '', 'px-3 py-2 rounded-lg rounded-r-0'] ">                    
                    <svg width="13px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M40 352c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0zm192 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0zM40 320l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40zM232 192c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0zM40 160l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40L40 32C17.9 32 0 49.9 0 72l0 48c0 22.1 17.9 40 40 40zM232 32c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0z"/></svg>
                </button>                             
                <button @click="grid = false" :class="[grid ? '' : 'active', 'px-3 py-2 rounded-lg rounded-l-0'] ">
                    <svg width="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M128 136c0-22.1-17.9-40-40-40L40 96C17.9 96 0 113.9 0 136l0 48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40V136zm0 192c0-22.1-17.9-40-40-40H40c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40H88c22.1 0 40-17.9 40-40V328zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM288 328c0-22.1-17.9-40-40-40H200c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328zm32-192v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM448 328c0-22.1-17.9-40-40-40H360c-22.1 0-40 17.9-40 40v48c0 22.1 17.9 40 40 40h48c22.1 0 40-17.9 40-40V328z"/></svg>
                </button>            
            </div>
        </div>
        <v-row>
            <v-col
                v-for="n in 3" 
                :key="n"
                cols="12"
                :md="grid ? 4 : 12"                
            >                        
                <v-card
                    :class=" [grid ? 'pb-5' : 'd-flex', 'mx-auto card-shadow']"
                    :max-width="grid ? '360' : '100%'"                    
                >
                    <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="220px"
                    :class="[grid ? ' ' : 'img-no-grid']"
                    ></v-img>

                    <div>
                        <v-card-title>
                            Heading Post
                        </v-card-title>

                        <v-card-subtitle class="grey--text">
                            November 29, 2020
                        </v-card-subtitle>
                        <v-card-text class="pb-0">
                            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                        </v-card-text>
                                            
                        <button class=" v-card__text inline-block text-decoration-underline text-left w-auto pt-0">Continue Reading</button> 
                    </div>                                                              
                </v-card>


            </v-col>
        </v-row>
        <div class="text-center mt-10">
            <v-pagination
                v-model="page"
                :length="3"
            ></v-pagination>
        </div>
        
    </div>
</template>

<script>
export default {
    layout: 'landboard',
    data() {
        return {
            grid: true,
            totalCount: 3,
            page: 1
        }
    }
}
</script>

<style>

</style>