<template>
    <validation-observer
        ref="validationObserver"
        v-slot="{ passes }"
        tag="div"
        class="observer-content"
    >
        <v-form :class="formClass" @submit.prevent="passes(submit)">
            <slot />
        </v-form>
    </validation-observer>
</template>


<script>
export default {
    props: {
        formClass: {
            type: [String],
            default: '',
        },
    },
    methods: {
        reset() {
            this.$refs.validationObserver.reset()
        },
        async validate() {
            return await this.$refs.validationObserver.validate()
        },
        submit() {
            this.$emit('submit')
        },
    },
}
</script>
