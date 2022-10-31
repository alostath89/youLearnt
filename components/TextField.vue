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
        <v-text-field
            class="mytexty-field"
            :value="value"
            :readonly="isTypePassword ? isReadOnly : false"
            :prefix="getRequiredStar('prefix')"
            :suffix="$t(suffix)"
            :disabled="disabled"
            :append-icon="computedAppendIcon"
            :error-messages="errors"
            :label="getRequiredStar('subLabel')"
            :type="type"
            :placeholder="$t(placeholder)"
            hide-spin-buttons
            outlined
            dense
            @click:append="click"
            @input="input"
            @focus="isReadOnly = false"
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
        type: {
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
    data() {
        return {
            initiatedAsPassword: false,
            isReadOnly: true,
        }
    },
    computed: {
        isTypePassword() {
            return this.type === 'password'
        },
        inputRules() {
            if (this.disabled && this.rules) this.rules.required = false
            return this.rules
        },
        computedAppendIcon() {
            if (!this.initiatedAsPassword) return this.appendIcon

            let icon
            if (this.type === 'password') icon = 'fal fa-eye input-password'
            if (this.type === 'text' && this.initiatedAsPassword) icon = 'fal fa-eye-slash input-password'
            return icon
        },
    },
    created() {
        if (this.type === 'password') this.initiatedAsPassword = true
    },
    methods: {
        getRequiredStar(where) {
            if (this[where] && this.rules && this.rules.required) return `${this.$t(this[where])} *`
            return this.$t(this[where])
        },
        input(val) {
            if (this.type === 'number' && val) return this.$emit('update:value', parseInt(val))
            this.$emit('update:value', val)
        },
        click() {
            if (this.isTypePassword) {
                this.initiatedAsPassword = true
                this.$emit('update:type', 'text')
            } else if (this.initiatedAsPassword) this.$emit('update:type', 'password')
        },
    },
}
</script>
