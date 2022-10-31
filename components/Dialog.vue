<template>
    <v-dialog
        :ref="dialogName"
        :value="isDialogOpen"
        :width="width"
        eager
        persistent
        :content-class="'customDialog '+ customClass"
    >
        <v-card>
            <v-card-title>
                <h2 class="text-h5">
                    {{ $t(title) }}
                </h2>
                <v-spacer />
                <v-btn
                    color="error"
                    icon
                    @click="$emit('closeDialog')"
                >
                    <v-icon>fal fa-times</v-icon>
                </v-btn>
            </v-card-title>

            <v-divider />

            <v-container class="pa-5">
                <slot />
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
        },
        isDialogOpen: { type: Boolean },
        dialogName: {
            default: 'dialog',
            type: String,
        },
        width: {
            type: String,
            default: '60%',
        },
        customClass: {
            type: String,
            default: '',
        },
    },
}
</script>
