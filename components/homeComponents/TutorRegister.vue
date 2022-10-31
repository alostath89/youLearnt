<template>
    <!-- Start SECTION -->
    <div class="my-14 section4">
        <v-container>
            <v-row class="align-center g-10">
                <v-col order-md="1" order="2" cols="12" md="7">
                    <div class="px-3">
                      <v-row>
                        <v-col cols="12" md="7">
                          <v-row>
                            <v-col cols="4">
                              <nuxt-link to="/" class="box mb-md-3 mb-0">
                                <h3>{{ $t('Register') }}</h3>
                                <img class="img1" src="http://akwade.net/youlearnt/assets/img/img-tutor-register-5.png">
                                <div class="overlay" />
                              </nuxt-link>
                              <nuxt-link to="/" class="box">
                                <h3>{{ $t('Register') }}</h3>
                                <img class="img1" src="http://akwade.net/youlearnt/assets/img/img-tutor-register-5.png">
                                <div class="overlay" />
                              </nuxt-link>
                            </v-col>
                            <v-col cols="8">
                              <nuxt-link to="/" class="box">
                                <h3>{{ $t('Register') }}</h3>
                                <img class="img2" src="http://akwade.net/youlearnt/assets/img/img-tutor-register-5.png">
                                <div class="overlay" />
                              </nuxt-link>
                            </v-col>
                            <v-col cols="12">
                              <nuxt-link to="/" class="box mb-md-3 mb-0">
                                <h3>{{ $t('Register') }}</h3>
                                <img class="img3" src="http://akwade.net/youlearnt/assets/img/img-tutor-register-5.png">
                                <div class="overlay" />
                              </nuxt-link>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="12" md="5">
                          <nuxt-link to="/" class="box mb-md-3 mb-0">
                            <h3>{{ $t('Register') }}</h3>
                            <img class="img4" src="http://akwade.net/youlearnt/assets/img/img-tutor-register-5.png">
                            <div class="overlay" />
                          </nuxt-link>
                        </v-col>
                      </v-row>
                    </div>
                </v-col>
                <v-col order-md="2" order="1" cols="12" md="5">
                    <div class="px-3 text-md-start text-center">
                      <h1 class="darktext--text text-md-start text-center font-weight-medium">
                        Are you ready to teach others what you are good at?
                      </h1>
                      <p class="textmuted--text mt-5 mb-7">
                        We all have unique life experiences that we can share with others.
                        YouLearnt provides the opportunity to teach others what you are good at or share your talents, skills, capabilities, and studies to take advantage of it to make money from home.
                        Lots of students are waiting for you.
                      </p>
                      <v-btn color="secondary" large class="px-12">Tutor Register</v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>


<style scoped lang="scss">
.section4 {
  .box {
    position: relative;
    display: block;
    overflow: hidden;
    img {
      width: 100%;
      object-fit: cover;
      object-position: center;
      &.img1 {
        height: 150px;
      }
      &.img2 {
        height: 316px;
      }
      &.img3 {
        height: 156px;
      }
      &.img4 {
        height: 495px;
      }
    }
    h3 {
      position: absolute;
      bottom: 0;
      left: 50%;
      padding-bottom: 12px;
      font-size: 22px;
      font-weight: 500;
      z-index: 5;
      color: #fff;
      transform: translateX(-50%)!important;
    }
    .overlay {
      background: #000;
      width: 100%;
      height: 99%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      opacity: 0.16;
    }
  }
}
</style>
