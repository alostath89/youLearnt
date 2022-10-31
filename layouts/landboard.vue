<template>
    <v-app class="landBoard-layout">
        <v-app-bar
            class="elevation-0"
            color="white"
            app
        >
            <v-container class="navbar">
                <v-toolbar-title>
                    <v-img width="14rem" :src="require('~/assets/images/logo.png')" />
                </v-toolbar-title>

                <v-spacer />

                <div>
                    <nuxt-link
                        v-for="(link, index) in navLinks"
                        :key="index"
                        class="accent--text text--lighten-2 px-2"
                        :to="{ name: link.route }"
                    >
                        {{ $t(link.title) }}
                    </nuxt-link>
                </div>

                <div class="d-flex">
                    <Menu
                        :title="`${$t('english')} - ${$t('usd')}$`"
                        :items="getLangProps.availableLangs"
                        option-label="title"
                    />

                    <v-divider class="me-3" vertical />

                    <v-btn depressed color="primary">
                        <i class="fal fa-sign-in me-3" />
                        {{ $t('login') }}
                    </v-btn>
                </div>
            </v-container>
        </v-app-bar>


        <v-main>
            <header>
                <h1 class="display-3">
                    Find Student
                </h1>

                <v-breadcrumbs :items="breadCrumb">
                    <template #divider>
                        <v-icon> fal fa-arrow-right </v-icon>
                    </template>
                </v-breadcrumbs>
            </header>
            <div class="content-wrap py-10">
                <v-container>
                    <nuxt :class="$route.name" />
                </v-container>
            </div>
        </v-main>

        <v-footer absolute app dark>
            <div class="footer-content">
                <div class="container upper">
                    <v-row>
                        <v-col md="3" class="flex-center">
                            <div>
                                <v-img width="80%" :src="require('~/assets/images/logo.png')" />
                                <p class="subtitle-1 mt-4">
                                    {{ $t('footerDisc') }}
                                </p>
                            </div>
                        </v-col>
                        <v-col md="6">
                            <div class="footer-links">
                                <div>
                                    <h5 class="text-h5 ps-3 font-weight-bold mb-4">
                                        YouLearnt
                                    </h5>
                                    <div
                                        v-for="(link, index) in youLearntLinks"
                                        :key="index"
                                    >
                                        <v-btn
                                            plain
                                            nuxt
                                            :to="{ name: link.route }"
                                        >
                                            {{ $t(link.title) }}
                                        </v-btn>
                                    </div>
                                </div>
                                <div>
                                    <h5 class="text-h5 ps-3 font-weight-bold mb-4">
                                        {{ $t('about') }}
                                    </h5>
                                    <div
                                        v-for="(link, index) in aboutLinks"
                                        :key="index"
                                    >
                                        <v-btn
                                            plain
                                            nuxt
                                            :to="{ name: link.route }"
                                        >
                                            {{ $t(link.title) }}
                                        </v-btn>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col md="3">
                            <h5 class="text-h5 font-weight-bold mb-4">
                                {{ $t('apps') }}
                            </h5>
                            <div class="mb-2">
                                <v-btn
                                    nuxt
                                    target="_blank"
                                    class="px-0 h-auto"
                                    href="https://www.apple.com/app-store/"
                                >
                                    <v-img :src="require('~/assets/images/footer-appStore.png')" width="13rem" />
                                </v-btn>
                            </div>
                            <div class="mb-2">
                                <v-btn
                                    nuxt
                                    target="_blank"
                                    class="px-0 h-auto"
                                    href="https://play.google.com/store/games"
                                >
                                    <v-img :src="require('~/assets/images/footer-playStore.png')" width="13rem" />
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </div>
                <div class="lower">
                    <div class="social">
                        <div v-for="(social, index) in socialMedia" :key="index">
                            <v-btn
                                small
                                target="_blank"
                                fab
                                nuxt
                                :href="social.route"
                                class="mx-2 white accent--text text--darken-1"
                            >
                                <i :class="['fab', social.icon, 'fa-2x']" />
                            </v-btn>
                        </div>
                    </div>
                    <div class="lowerLinks my-4">
                        <div v-for="(link, index) in lowerLinks" :key="index">
                            <v-btn
                                text
                                target="_blank"
                                nuxt
                                :href="link.route"
                                class="mx-5"
                            >
                                {{ $t(link.title) }}
                            </v-btn>
                        </div>
                    </div>
                    <div class="copyRight">
                        YouLearnt, {{ $t('reservedRights') }} &copy; {{ new Date().getFullYear() }}
                    </div>
                </div>
            </div>
        </v-footer>
    </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'DefaultLayout',
    data() {
        return {
            breadCrumb: [
                {
                    text: 'Dashboard',
                    disabled: false,
                    href: 'breadcrumbs_dashboard',
                },
                {
                    text: 'Link 1',
                    disabled: false,
                    href: 'breadcrumbs_link_1',
                },
            ],
            navLinks: [
                {
                    title: 'dashboard',
                    route: '',
                },
                {
                    title: 'howItWorks',
                    route: '',
                },
                {
                    title: 'contact',
                    route: '',
                },
            ],
            socialMedia: [
                {
                    icon: 'fa-facebook-f',
                    route: 'https://www.facebook.com/',
                },
                {
                    icon: 'fa-instagram',
                    route: 'https://www.instagram.com/',
                },
                {
                    icon: 'fa-twitter',
                    route: 'https://twitter.com/',
                },
                {
                    icon: 'fa-youtube',
                    route: 'https://www.youtube.com/',
                },
            ],
            lowerLinks: [
                {
                    title: 'privacy',
                    route: '',
                },
                {
                    title: 'security',
                    route: '',
                },
                {
                    title: 'terms',
                    route: '',
                },
            ],
            aboutLinks: [
                {
                    title: 'careers',
                    route: '',
                },
                {
                    title: 'partners',
                    route: '',
                },
                {
                    title: 'community',
                    route: '',
                },
                {
                    title: 'faq',
                    route: '',
                },
            ],
            youLearntLinks: [
                {
                    title: 'aboutUs',
                    route: '',
                },
                {
                    title: 'affiliateProgram',
                    route: '',
                },
                {
                    title: 'referFriend',
                    route: '',
                },
                {
                    title: 'blog',
                    route: '',
                },
            ],
        }
    },
    computed: { ...mapGetters(['getLangProps']) },
}
</script>
LLL
