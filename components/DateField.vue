<template>
    <v-menu
        v-model="isMenuOpen"
        min-width="auto"
        offset-y
    >
        <template #activator="{ on, attrs }">
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
                    v-bind="attrs"
                    :value="value"
                    :prefix="getRequiredStar('prefix')"
                    :suffix="$t(suffix)"
                    :disabled="disabled"
                    append-icon="fal fa-calender"
                    :error-messages="errors"
                    :label="getRequiredStar('subLabel')"
                    :placeholder="$t(placeholder)"
                    outlined
                    dense
                    v-on="on"
                    @input="input"
                />
            </ValidationProvider>
        </template>

        <v-date-picker
            :value="value"
            :min="min"
            scrollable
            no-title
            @input="input"
        />
    </v-menu>
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
        min: {
            type: [String, Date],
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
        return { isMenuOpen: false }
    },
    methods: {
        getRequiredStar(where) {
            if (this[where] && this.rules && this.rules.required) return `${this.$t(this[where])} *`
            return this.$t(this[where])
        },
        input(val) {
            this.$emit('update:value', val)
        },
    },
}
</script>
