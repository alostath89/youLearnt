import Vue from 'vue'
import Toasted from 'vue-toasted'


Vue.use(Toasted)

const toastedSharedProps = {
    position: 'top-center',
    duration: 5000,
    keepOnHover: true,
    iconPack: 'custom-class',
    closeOnSwipe: false,
}

Vue.toasted.register('successMsg', message => message, {
    ...toastedSharedProps,
    type: 'success',
    icon: 'fal fa-check-circle',
})

Vue.toasted.register('infoMsg', message => message, {
    ...toastedSharedProps,
    type: 'info',
    icon: 'fal fa-info-circle',
})

Vue.toasted.register('errorMsg', message => message, {
    ...toastedSharedProps,
    type: 'error',
    icon: 'fal fa-times-circle',
})
