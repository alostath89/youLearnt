import { localize } from 'vee-validate'


window.onNuxtReady(($nuxt) => {
    $nuxt.$store.commit('overrideStateFromLocalStorage');
    $nuxt.$i18n.locale = $nuxt.$vuetify.lang.current = $nuxt.$store.getters.getLangProps.langCode
    $nuxt.$vuetify.rtl = Boolean($nuxt.$store.getters.getLangProps.isAr)
    $nuxt.$store.commit('setCurrentLang', $nuxt.$store.getters.getLangProps.langCode)
    localize($nuxt.$store.getters.getLangProps.langCode)

    document.querySelector('html').setAttribute('lang', $nuxt.$store.getters.getLangProps.langCode)
    document.querySelector('html').setAttribute('dir', $nuxt.$store.getters.getLangProps.isAr ? 'rtl' : 'ltr')
})
