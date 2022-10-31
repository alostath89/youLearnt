import localStorageMgt from '../plugins/localStorageMgt'

export default {
    setCurrentLang(state, newLangCode) {
        state.currentLang = newLangCode
    },
    setUserDetails(state, userDetails) {
        state.userDetails = userDetails
        if (userDetails) localStorageMgt.setUserDetails(userDetails)
        else localStorage.removeItem('userDetails')
    },
    overrideStateFromLocalStorage(state) {
        state.userDetails = localStorageMgt.getUserDetails()

        state.currentLang = localStorageMgt.getCurrentLang() || 'en'
        localStorageMgt.setCurrentLang(state.currentLang)
    },
    deleteStateAndLocalStorage(state) {
        localStorageMgt.removeEverything('currentLang')

        state.userDetails = null
        state.firebaseToken = null
    },
}
