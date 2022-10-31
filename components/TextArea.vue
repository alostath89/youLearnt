<template>
    <ValidationProvider
        v-slot="{ errors }"
        :rules="rules"
        :class="inputClass"
        :name="name"
    >
        <label v-if="supLabel" class="d-block mb-2">
            {{ getRequiredStar('supLabel') }}
        </label>
        <v-textarea
            :value="value"
            :prefix="getRequiredStar('prefix')"
            :suffix="$t(suffix)"
            :disabled="disabled"
            :append-icon="appendIcon"
            :error-messages="errors"
            :label="getRequiredStar('subLabel')"
            :placeholder="$t(placeholder)"
            outlined
            dense
            @input="input"
        />
    </ValidationProvider>
</template>

<script>
export default {
    props: {
        rules: {
            type: [Object],
            default: () => ({}),
        },
        inputClass: {
            type: [String],
            default: '',
        },
        name: {
            type: [String],
            default: '',
        },
        value: {
            type: [String, Array, Number, Boolean],
            default: null,
        },
        suffix: {
            type: [String],
            default: '',
        },
        prefix: {
            type: [String],
            default: '',
        },
        disabled: {
            type: [Boolean],
            default: false,
        },
        appendIcon: {
            type: [String],
            default: '',
        },
        subLabel: {
            type: [String],
            default: '',
        },
        supLabel: {
            type: [String],
            default: '',
        },
        placeholder: {
            type: [String],
            default: '',
        },
    },
    computed: {
        inputRules() {
            if (this.disabled && this.rules) this.rules.required = false
            return this.rules
        },
    },
    methods: {
        getRequiredStar(where) {
            if (this[where] && this.rules && this.rules.required) return `${this.$t(this[where])} *`
            return this.$t(this[where])
        },
        input(val) {
            return this.$emit('update:value', val)
        },
    },
}
</script>
