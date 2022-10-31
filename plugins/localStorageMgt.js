export default {
    setUserDetails(payload) {
        localStorage.setItem('userDetails', JSON.stringify(payload))
    },
    getUserDetails() {
        if (localStorage.getItem('userDetails')) return JSON.parse(localStorage.getItem('userDetails'))
        return null
    },

    // ============================================================
    setCurrentLang(language) {
        localStorage.setItem('currentLang', language)
    },
    getCurrentLang() {
        if (localStorage.getItem('currentLang')) return localStorage.getItem('currentLang')
        return null
    },
    removeCurrentLang() {
        localStorage.removeItem('currentLang')
    },

    // ============================================================
    removeEverything(exception) {
        const keys = Object.keys(localStorage)
        keys.forEach((key) => {
            if (key !== exception) localStorage.removeItem(key)
        })
    },
}
