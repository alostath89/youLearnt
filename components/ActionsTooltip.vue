<template>
    <div>
        <v-tooltip top>
            <template #activator="{ on, attrs }">
                <v-btn
                    :x-small="xSmall"
                    depressed
                    :color="color"
                    v-bind="attrs"
                    :disabled="disabled"
                    :fab="fab"
                    :outlined="outlined"
                    :tile="tile"
                    v-on="on"
                    @click.stop="click"
                >
                    <v-icon small>
                        {{ icon }}
                    </v-icon>
                </v-btn>
            </template>
            <span> {{ $t(title) }} </span>
        </v-tooltip>

        <v-bottom-sheet
            :value="isConfirmOpen"
            content-class="w-100"
            persistent
        >
            <v-sheet>
                <v-container>
                    <v-row>
                        <v-col cols="12" md="6">
                            <v-card-title class="headline">
                                {{ $t(message) }}
                            </v-card-title>
                        </v-col>
                        <v-col
                            class="d-flex justify-end align-center"
                            cols="12"
                            md="6"
                        >
                            <actions-btn
                                icon="fal fa-check-circle"
                                title="yes"
                                @click="$emit('confirmed'); isConfirmOpen = false"
                            />

                            <actions-btn
                                icon="fal fa-times-circle"
                                color="secondary"
                                title="cancel"
                                class="ms-2"
                                @click="isConfirmOpen = false"
                            />
                        </v-col>
                    </v-row>
                </v-container>
            </v-sheet>
        </v-bottom-sheet>
    </div>
</template>

<script>
export default {
    props: {
        color: {
            type: [String],
            default: 'primary',
        },
        icon: {
            type: [String],
            default: '',
        },
        title: {
            type: [String],
            default: '',
        },
        disabled: {
            type: [Boolean],
            default: false,
        },
        outlined: {
            type: [Boolean],
            default: false,
        },
        fab: {
            type: [Boolean],
            default: true,
        },
        xSmall: {
            type: [Boolean],
            default: true,
        },
        tile: {
            type: [Boolean],
            default: false,
        },
        message: {
            type: String,
            default: 'deletionConfirmation',
        },
        withConfirm: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return { isConfirmOpen: false }
    },
    methods: {
        click() {
            if (this.withConfirm) this.isConfirmOpen = true
            else this.$emit('click')
        },
        confirmed() {
            this.isConfirmOpen = false
            this.$emit('confirmed')
        },
    },
}
</script>
