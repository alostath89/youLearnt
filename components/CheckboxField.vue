<template>
    <v-checkbox :value="value" hide-details @change="change">
        <template #label>
            <slot />
        </template>
    </v-checkbox>
</template>

<script>
export default {
    props: {
        value: {
            type: [Boolean],
            default: true,
        },
    },
    methods: {
        change(val) {
            return this.$emit('change:value', val)
        },
    },
}
</script>
