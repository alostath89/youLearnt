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
        <v-file-input
            :placeholder="$t(placeholder)"
            :prefix="getRequiredStar('prefix')"
            :value="value"
            :multiple="multiple"
            :disabled="disabled"
            :chips="multiple"
            deletable-chips
            :append-icon="appendIcon"
            prepend-inner-icon="$file"
            prepend-icon=""
            truncate-length="20"
            small-chips
            :suffix="$t(suffix)"
            :error-messages="errors"
            :label="getRequiredStar('subLabel')"
            outlined
            dense
            @change="change"
        >
            <template
                v-if="multiple"
                #selection="{ index, text }"
            >
                <v-chip
                    v-if="index < (truncateLength)"
                    small
                >
                    <span>{{ text }} </span>
                </v-chip>
                <span
                    v-if="index === (truncateLength)"
                    class="text-caption custom"
                >
                    {{ $t("otherNum", { num: value.length - (truncateLength) }) }}
                </span>
            </template>
        </v-file-input>
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
            type: [String, Array, Boolean, File],
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
        multiple: {
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
        return { truncateLength: 3 }
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
        change(val) {
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
