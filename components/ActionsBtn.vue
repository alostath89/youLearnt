<template>
    <v-btn depressed :loading="loading" :color="color" @click="$emit('click')">
        <v-icon small class="me-3">
            {{ icon }}
        </v-icon>
        {{ $t(title) }}
    </v-btn>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
        color: {
            type: String,
            default: 'primary',
        },
        loading: {
            type: Boolean,
            default: false,
        },
    },
}
</script>
