// import i18n from "@/plugins/i18n";

export default {
    getVueAppBase() {
        return process.env.VUE_APP_BASE
    },
    getUserDetails(state) {
        return state.userDetails
    },
    getLangProps(state) {
        const langObj = {
            langCode: state.lang,
            availableLangs: [
                {
                    code: 'ar',
                    title: 'العربية',
                },
                {
                    code: 'en',
                    title: 'English',
                },
            ],
        }
        if (langObj.langCode === 'en') {
            langObj.langTitle = 'English'
            langObj.isEn = true
        }
        if (langObj.langCode === 'ar') {
            langObj.langTitle = 'العربية'
            langObj.isAr = true
        }

        return langObj
    },
    getPagination() {
        return {

            // For testing
            lonely: 1,

            small: 5,
            default: 10,
            medium: 20,
            large: 30,
        }
    },
}
