<template>
    <v-app>
        <Hero />
        <WhyDoYouWantLearn />

        <!-- Start SECTION -->
        <section class="my-16">
            <v-container>
                <v-row class="align-center">
                    <v-col class="text-center" cols="12" sm="5">
                        <h1 class="font-weight-medium textdark--text">
                            Learn what you want without leaving home
                        </h1>
                        <p class="textmuted--text mb-8 mt-4">
                            There is no age limit to learning. A person continues to learn until death.
                            Youlearnt provides an online learning environment for all ages, connecting students to a massive network of tutors worldwide in various scientific disciplines, life skills, and practical experiences.
                        </p>
                        <v-btn color="primary" large class="px-12">
                            {{ $t('Register') }}
                        </v-btn>
                    </v-col>
                    <v-col cols="12" sm="7">
                        <img src="http://akwade.net/youlearnt/assets/img/profession.png" class="w-100">
                    </v-col>
                </v-row>
            </v-container>
        </section>

        <TutorRegister />

        <HowItWorks />

        <FaqSection />

        <BlogSection />

        <LatestTopics />

        <v-container>
            <v-row>
                <v-col cols="12" md="6">
                    <div class="bg-are-you-instructor">
                        <img src="../assets/images/instructor-icon.svg">
                        <h2 class="mt-5 mb-4 font-weight-medium white--text">
                            Are you a tutor? <i class="fa-solid fa-arrow-right-long d-inline-block ms-4" />
                        </h2>
                        <p class="white--text fs-14px">
                            Start teaching today on YouLearnt and make money!
                        </p>
                    </div>
                </v-col>
                <v-col cols="12" md="6">
                    <div class="bg-are-you-instructor student-section">
                        <img src="../assets/images/student-icon.svg">
                        <h2 class="mt-5 mb-4 font-weight-medium white--text">
                            Are you a tutor? <i class="fa-solid fa-arrow-right-long d-inline-block ms-4" />
                        </h2>
                        <p class="white--text fs-14px">
                            Start teaching today on YouLearnt and make money!
                        </p>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
<script>
import Hero from '~/components/homeComponents/hero'
import WhyDoYouWantLearn from '~/components/homeComponents/WhyDoYouWantLearn'
import LatestTopics from '@/components/homeComponents/LatestTopics'
import TutorRegister from '@/components/homeComponents/TutorRegister'
import HowItWorks from '@/components/homeComponents/HowItWorks'
import FaqSection from '@/components/homeComponents/FaqSection'
import BlogSection from '@/components/homeComponents/BlogSection'
export default {
    components: {
        BlogSection,
        FaqSection,
        HowItWorks,
        TutorRegister,
        LatestTopics,
        WhyDoYouWantLearn,
        Hero,
    },
}
</script>

<style lang="scss" scoped>
.bg-are-you-instructor {
  background: url("../assets/images/bg-are-you-instructor.png") no-repeat;
  background-size: cover;
  height: 246px;
  border-radius: 15px;
  padding: 1.6rem;
  color: #fff;
  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
  &.student-section {
    background: url("../assets/images/bg-are-you-student.png") no-repeat !important;
  }
}
</style>

