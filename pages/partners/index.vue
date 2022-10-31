<template>
    <div class="test-class pb-10">
        <div class="text-center mb-16" :class="$vuetify.breakpoint.mobile ? 'w-100' : 'w-50 mx-auto'">
            <h2 class="font-weight-medium font-size mb-3 fs-32">
                Getting Started Guide
            </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aperiam, culpa delectus deleniti fugit id laboriosam molestias nemo.
            </p>
        </div>
        <v-row>
            <v-col class="mb-3" v-for="partner in partners" :key="partner.id" cols="3">
                <div :class=" [grid ? '' : 'd-flex', 'partner w-100 text-center']">
                    <div class="img">
                        <img :src="partner.image">
                    </div>
                    <h3 class="primary--text mb-2">
                        {{ partner.name }}
                    </h3>
                    <p class="fs-14 mb-4 grey--text">
                        {{ partner.slug }}
                    </p>
                    <p class="fs-14">
                        {{ partner.description }}
                    </p>
                </div>
            </v-col>
        </v-row>
        <div class="text-center mt-10">
            <v-pagination
                v-model="page"
                :length="3"
            />
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
            page: 1,
            partners: [
                {
                    id: '1',
                    name: 'Leavest & Co',
                    slug: 'Giveaway Partner',
                    image: 'http://akwade.net/youlearnt/assets/img/partner-logo-1.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aperiam, culpa delectus',
                },
                {
                    id: '2',
                    name: 'Handmade with Love',
                    slug: 'Giveaway Partner',
                    image: 'http://akwade.net/youlearnt/assets/img/partner-logo-2.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aperiam, culpa delectus',
                },
                {
                    id: '3',
                    name: 'Furniture Studio',
                    slug: 'Giveaway Partner',
                    image: 'http://akwade.net/youlearnt/assets/img/partner-logo-3.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aperiam, culpa delectus',
                },
                {
                    id: '4',
                    name: 'Brenda Strong',
                    slug: 'Giveaway Partner',
                    image: 'http://akwade.net/youlearnt/assets/img/partner-logo-4.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aperiam, culpa delectus',
                },
                {
                    id: '5',
                    name: 'Blake Plema',
                    slug: 'Giveaway Partner',
                    image: 'http://akwade.net/youlearnt/assets/img/partner-logo-5.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aperiam, culpa delectus',
                },
                {
                    id: '6',
                    name: 'Sushi Express',
                    slug: 'Giveaway Partner',
                    image: 'http://akwade.net/youlearnt/assets/img/partner-logo-6.png',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias aperiam, culpa delectus',
                },
            ],
        }
    },
}
</script>

<style>
.partner .img {
  min-height: 120px;
  position: relative;
  margin-bottom: 1.2rem;
}
.partner img {
  filter: grayscale(100%);
  position: absolute;
  left: 50%;
  top: 50%;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  transform: translate(-50%,-50%) !important;
}
.partner:hover img{filter: grayscale(0);}
.partner h3 {
  font-size: 20px;
  font-weight: 500;
}
</style>
