<template>
    <v-container class="my-10">
        <h2 class="mb-6 text-center font-weight-medium">
            {{ $t('Frequently Asked Questions') }}
        </h2>

        <FaqItem />
        <FaqItem />
        <FaqItem />

    </v-container>
</template>
<script>
import FaqItem from '@/components/homeComponents/FaqItem'
export default {
    components: { FaqItem },
}
</script>
