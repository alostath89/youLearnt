import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n'

export default {
    generate: { dir: 'vuelearnt' },
    // router: { base: '/vuelearnt/' },
    vue: {
        config: {
            lintOnSave: true,
            configureWebpack: { devtool: process.env.VUE_APP_MODE === 'development' ? 'source-map' : '' },
            publicPath: '/',
            css: { sourceMap: process.env.VUE_APP_MODE === 'development' },
            productionSourceMap: false,
            pluginOptions: { webpackBundleAnalyzer: { openAnalyzer: false } },
        },
    },

    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - youlearnt',
        title: 'youlearnt',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: '',
            },
            {
                name: 'format-detection',
                content: 'telephone=no',
            },
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico',
            },
        ],
    },


    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/veeValidate',
        '~/plugins/axios',
        '~/plugins/toast',
        '~/plugins/startup',
        '~/mixins/xhr',
        '~/plugins/localStorageMgt',
        '~/plugins/momentConfig',
        '~/plugins/fontawesome.js'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [

        // https://go.nuxtjs.dev/eslint , https://go.nuxtjs.dev/vuetify
        '@nuxtjs/eslint-module', ['@nuxtjs/vuetify', vuetify], ['@nuxtjs/i18n', i18n],
    ],

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/styles/framework', '@fortawesome/fontawesome-svg-core/styles.css'],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [

        // https://go.nuxtjs.dev/axios , https://go.nuxtjs.dev/pwa
        'nuxt-route-meta', '@nuxtjs/axios', '@nuxtjs/pwa',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {

        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: 'https://phplaravel-590413-2696480.cloudwaysapps.com/api',
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: { manifest: { lang: 'en' } },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: { transpile: ['vee-validate/dist/rules'] },
}
