<template>
    <div class="py-10">        
        <div class="mb-10">
            <p class="text-h4 text-h5 mb-5 font-weight-medium">For you</p>         
            <v-row >
                <v-col
                    v-for="n in 6"
                    :key="n"
                    cols="12"
                    lg="2"
                    md="3"
                    sm="4"
                    xs="6"                    
                >                              
                    <div class="community-box relative rounded-lg overflow-hidden" style="background-image: url('http://akwade.net/youlearnt/assets/img/community-blox-img-1.png');">
                        <a href="#" class="absolute overlay white--text d-flex justify-center align-center">Music</a>
                    </div>                    
                </v-col>
            </v-row>
        </div>
        <div class="mb-10">
            <p class="text-h4 text-h5 mb-5 font-weight-medium">Subjects</p>         
            <v-row>
                <v-col
                    v-for="n in 10"
                    :key="n"
                    cols="12"
                    lg="2"
                    md="3"
                    sm="4"
                    xs="6"                    
                >                              
                    <div class="community-box relative rounded-lg overflow-hidden" style="background-image: url('http://akwade.net/youlearnt/assets/img/community-blox-img-1.png');">
                        <a href="#" class="absolute overlay white--text d-flex justify-center align-center">Music</a>
                    </div>                    
                </v-col>
            </v-row>
            <div class="text-center mt-8">
                <v-btn 
                :loading="loading"
                :disabled="loading"  
                @click="loader = 'loading'"                     
                color="#ed3439"
                class="white--text px-10"
                > More
                </v-btn>
            </div>
        </div>
        <div>
            <p class="text-h4 text-h5 mb-5 font-weight-medium">New</p>         
            <v-row >
                <v-col
                    v-for="n in 5"
                    :key="n"
                    cols="12"
                    lg="2"
                    md="3"
                    sm="4"
                    xs="6"                    
                >                              
                    <div class="community-box relative rounded-lg overflow-hidden" style="background-image: url('http://akwade.net/youlearnt/assets/img/community-blox-img-1.png');">
                        <a href="#" class="absolute overlay white--text d-flex justify-center align-center">Music</a>
                    </div>                    
                </v-col>
            </v-row>
        </div>
    
    </div>
</template>

<script>
export default {
    layout: 'landboard',
    data() {
        return {
            loader: null,
            loading: false,
        }
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },
}
</script>

<style>

</style>