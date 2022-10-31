<template>
    <v-expansion-panels>
        <v-expansion-panel>
            <v-expansion-panel-header color="red--text">
                <div class="error-expansion">
                    <span> {{ $t('someErrorsOccurred') }} </span>
                    <v-chip small color="red white--text" class="ms-3">
                        {{ Object.keys(errors).length }} {{ $t("errors") }}
                    </v-chip>
                </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <div v-for="(item, index) in Object.entries(errors)" :key="index" class="mb-4">
                    <div class="mb-3">
                        {{ index + 1 }}- <kbd> {{ item[0] }}: </kbd>
                    </div>

                    <div v-if="item[1]" class="ps-5">
                        <p v-for="(desc, key) in item[1]" :key="key">
                            {{ desc }}
                        </p>
                    </div>
                </div>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
</template>
<script>
export default {
    props: {
        errors: {
            type: [Object],
            default() {},
        },
    },
}
</script>
