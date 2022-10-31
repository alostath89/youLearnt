// Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
import colors from 'vuetify/es5/util/colors'
import ar from 'vuetify/lib/locale/ar'
import en from 'vuetify/lib/locale/en'
const faPrefix = 'fal'

export default {
    customVariables: ['~/assets/variables.scss'],
    lang: {
        locales: {
            ar,
            en,
        },
    },
    treeShake: true,
    defaultAssets: {
        font: {
            family: 'Poppins',
            size: 16,
        },
    },
    theme: {
        options: { customProperties: true },
        dark: false,
        themes: {
            light: {
                primary: '#2F4986',
                secondary: '#ED3439',
                accent: colors.grey.darken3,
                info: colors.teal.lighten1,
                warning: colors.amber.base,
                error: colors.deepOrange.accent4,
                success: colors.green.accent3,
                textdark: '#212529',
                textmuted: '#809fb8',
            },
        },
        icons: {
            iconfont: 'fa',
            values: {
                cancel: `${faPrefix} fa-times-circle`,
                checkboxIndeterminate: `${faPrefix} fa-minus-square`,
                checkboxOff: `${faPrefix} fa-square`,
                checkboxOn: `${faPrefix} fa-check-square`,
                clear: `${faPrefix} fa-times-circle`,
                close: `${faPrefix} fa-times`,
                complete: `${faPrefix} fa-check`,
                delete: `${faPrefix} fa-times-circle`,
                delimiter: `${faPrefix} fa-circle`,
                dropdown: `${faPrefix} fa-angle-down`,
                edit: `${faPrefix} fa-edit`,
                error: `${faPrefix} fa-exclamation-triangle`,
                expand: `${faPrefix} fa-angle-down`,
                file: `${faPrefix} fa-cloud-upload`,
                first: `${faPrefix} fa-step-backward`,
                info: `${faPrefix} fa-info-circle`,
                last: `${faPrefix} fa-step-forward`,
                loading: `${faPrefix} fa-sync`,
                menu: `${faPrefix} fa-bars`,
                minus: `${faPrefix} fa-minus`,
                next: `${faPrefix} fa-chevron-right`,
                plus: `${faPrefix} fa-plus`,
                prev: `${faPrefix} fa-chevron-left`,
                radioOff: `${faPrefix} fa-circle`,
                radioOn: `${faPrefix} fa-dot-circle`,
                ratingEmpty: `${faPrefix} fa-star`,
                ratingFull: `${faPrefix} fa-star`,
                ratingHalf: `${faPrefix} fa-star-half`,
                sort: `${faPrefix} fa-chevron-up`,
                subgroup: `${faPrefix} fa-angle-down`,
                success: `${faPrefix} fa-check-circle`,
                unfold: `${faPrefix} fa-arrows-alt-v`,
                warning: `${faPrefix} fa-exclamation`,
            },
        },
    },
}
