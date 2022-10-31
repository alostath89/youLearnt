<template>
    <v-app class="dashboard-layout">
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

                    <v-divider vertical />

                    <v-menu
                        left
                        bottom
                        offset-y
                    >
                        <template #activator="{ on, attrs }">
                            <v-btn
                                color="transparent"
                                class="user-dropdown"
                                elevation="0"
                                v-bind="attrs"
                                v-on="on"
                            >
                                <v-avatar
                                    color="primary"
                                    size="30"
                                    class="me-3"
                                >
                                    <img
                                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                                        alt="John"
                                    >
                                </v-avatar>

                                <div class="text-start">
                                    <p> {{ $t('welcome') }} </p>
                                    <p class="primary--text">
                                        Muhammad Sh
                                        <i class="fa angle-down ms-2" />
                                    </p>
                                </div>
                            </v-btn>
                        </template>

                        <v-list>
                            <v-list-item class="py-2">
                                <v-list-item-title>
                                    <i class="fas fa-sign-out me-3" />
                                    {{ $t('logout') }}
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            </v-container>
        </v-app-bar>


        <v-main class="mt-5">
            <v-container>
                <v-row>
                    <v-col class="sidebar" lg="3" xl="2">
                        <v-card class="pa-3">
                            <v-avatar class="user-img" size="200">
                                <img
                                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                                    alt="John"
                                >
                            </v-avatar>
                            <div class="mt-5">
                                <h2 class="text-h5 primary-bold">
                                    Welcome back,
                                </h2>
                                <h2 class="text-h6 secondary--text">
                                    Muhammad
                                </h2>
                            </div>
                            <v-list
                                v-for="(item, index) in sidebar"
                                :key="index"
                                dense
                                class="mt-4"
                            >
                                <v-subheader class="text-uppercase text-h6 pa-0">
                                    {{ $t(item.title) }}
                                </v-subheader>
                                <v-list-item-group color="primary">
                                    <v-list-item
                                        v-for="(link, i) in item.links"
                                        :key="i"
                                        nuxt
                                        exact
                                        :to="{ name: link.route }"
                                    >
                                        <v-list-item-content class="text-subtitle-1">
                                            {{ $t(link.title) }}
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                        </v-card>
                    </v-col>

                    <v-col lg="9" xl="10">
                        <v-card class="content">
                            <v-container v-if="$route.meta.title">
                                <v-row>
                                    <v-col>
                                        <h2 :key="$route.name" class="mb-5 primary-bold text-h4">
                                            {{ $t($route.meta.title) }}
                                        </h2>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <v-container>
                                <nuxt />
                            </v-container>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'DashboardLayout',
    auth: true,
    meta: { title: 'home' },
    data() {
        return {
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
            sidebar2: [
                {
                    title: 'dashboard',
                    links: [
                        {
                            title: 'home',
                            route: 'teacher',
                        },
                        {
                            title: 'blog',
                            route: 'teacher-blog',
                        },
                        {
                            title: 'calendar',
                            route: 'teacher-calendar',
                        },
                        {
                            title: 'community',
                            route: 'teacher-community',
                        },
                        {
                            title: 'background',
                            route: 'teacher-background',
                        },
                        {
                            title: 'chat',
                            route: 'teacher-chat',
                        },
                        {
                            title: 'report',
                            route: 'teacher-report',
                        },

                    ],
                },
                {
                    title: 'accountSettings',
                    links: [
                        {
                            title: 'profileSettings',
                            route: 'teacher-profile',
                        },
                        {
                            title: 'security',
                            route: 'teacher-security',
                        },
                        {
                            title: 'withdraw',
                            route: 'teacher-withdraw',
                        },
                    ],
                },
            ],
        }
    },
    computed: {
        ...mapGetters(['getLangProps', 'getUserDetails']),
        sidebar() {
            let bar = []
            if (!this.getUserDetails) return bar = []
            if (this.getUserDetails.type === 'teacher') return bar = [
                {
                    title: 'dashboard',
                    links: [
                        {
                            title: 'home',
                            route: 'teacher',
                        },
                        {
                            title: 'blog',
                            route: 'teacher-blog',
                        },
                        {
                            title: 'calendar',
                            route: 'teacher-calendar',
                        },
                        {
                            title: 'community',
                            route: 'teacher-community',
                        },
                        {
                            title: 'background',
                            route: 'teacher-background',
                        },
                        {
                            title: 'chat',
                            route: 'teacher-chat',
                        },
                        {
                            title: 'report',
                            route: 'teacher-report',
                        },

                    ],
                },
                {
                    title: 'accountSettings',
                    links: [
                        {
                            title: 'profileSettings',
                            route: 'teacher-profile',
                        },
                        {
                            title: 'security',
                            route: 'teacher-security',
                        },
                        {
                            title: 'withdraw',
                            route: 'teacher-withdraw',
                        },
                    ],
                },
            ]
            if (this.getUserDetails.type === 'student') return bar = [
                {
                    title: 'dashboard',
                    links: [
                        {
                            title: 'home',
                            route: 'student',
                        },
                        {
                            title: 'calendar',
                            route: 'student-calendar',
                        },
                        {
                            title: 'favorite',
                            route: 'student-favorite',
                        },
                        {
                            title: 'chat',
                            route: 'teacher-chat',
                        },
                    ],
                },
                {
                    title: 'accountSettings',
                    links: [
                        {
                            title: 'profileSettings',
                            route: 'teacher-profile',
                        },
                        {
                            title: 'security',
                            route: 'teacher-security',
                        },
                        {
                            title: 'withdraw',
                            route: 'teacher-withdraw',
                        },
                    ],
                },
            ]

            return bar
        },
    },
}
</script>
