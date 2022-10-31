<template>
    <v-menu
        left
        bottom
        offset-y
    >
        <template #activator="{ on, attrs }">
            <v-btn
                :color="color"
                elevation="0"
                :class="btnClass"
                v-bind="attrs"
                v-on="on"
            >
                <v-icon v-if="icon" small class="me-3">
                    {{ icon }}
                </v-icon>
                {{ title }}
                <i class="fal fa-angle-down ms-2" />
            </v-btn>
        </template>

        <v-list>
            <v-list-item
                v-for="(item, key) in items"
                :key="key"
                @click="$emit('click', item)"
            >
                <v-list-item-title> {{ item[optionLabel] }} </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>

export default {
    props: {
        title: {
            type: [String],
            default: '',
        },
        optionLabel: {
            type: [String],
            default: 'title',
        },
        btnClass: {
            type: [String],
            default: '',
        },
        items: {
            type: [Array],
            default: () => ([]),
        },
        color: {
            type: [String],
            default: 'transparent',
        },
        icon: {
            type: [String],
            default: '',
        },
    },
}
</script>
