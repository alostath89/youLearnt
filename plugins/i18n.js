
// ================= Arabic =====================
import ar from '../locales/system/ar'
import en from '../locales/system/en'


const i18n = {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    vueI18n: {
        messages: {
            ar,
            en,
        },
    },
}

export default i18n
