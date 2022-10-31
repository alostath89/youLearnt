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
        <v-select
            :label="getRequiredStar('subLabel')"
            :prefix="getRequiredStar('prefix')"
            :placeholder="$t(placeholder)"
            :return-object="returnObject"
            :error-messages="errors"
            :item-value="itemValue"
            :item-text="itemText"
            :suffix="$t(suffix)"
            :multiple="multiple"
            :disabled="disabled"
            :chips="multiple"
            :value="value"
            :items="items"
            outlined
            dense
            @input="input"
        >
            <template
                v-if="multiple"
                #selection="{ item, index }"
            >
                <v-chip
                    v-if="index < (truncateLength)"
                    small
                >
                    <span>{{ item[itemText] }} </span>
                </v-chip>
                <span
                    v-if="index === (truncateLength)"
                    class="text-caption custom"
                >
                    {{ $t("otherNum", { num: value.length - (truncateLength) }) }}
                </span>
            </template>
        </v-select>
    </ValidationProvider>
</template>

<script>
export default {
    props: {
        rules: {
            type: [Object],
            default: () => ({}),
        },
        items: {
            type: [Array],
            default: () => ([]),
        },
        inputClass: {
            type: [String],
            default: '',
        },
        itemText: {
            type: [String],
            default: 'name',
        },
        itemValue: {
            type: [String],
            default: 'id',
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
        multiple: {
            type: [Boolean],
            default: false,
        },
        returnObject: {
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
        isTypePassword() {
            return this.type === 'password'
        },
        inputRules() {
            if (this.disabled && this.rules) this.rules.required = false
            return this.rules
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
