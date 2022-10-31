<template>
    <div class="text-center">
        <v-pagination
            v-model="page"
            :length="length"
            total-visible="4"
            circle
            @input="input"
        />
    </div>
</template>

<script>
export default {
    props: {
        totalCount: {
            type: Number,
            default: 0,
        },
        perPage: {
            type: Number,
            default: 10,
        },
    },
    data() {
        return { page: 1 }
    },
    computed: {
        length() {
            return Math.ceil(this.totalCount / this.perPage)
        },
    },
    methods: {
        input(val) {
            this.$emit('input', val)
        },
    },
}
</script>
