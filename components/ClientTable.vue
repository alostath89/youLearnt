<template>
    <v-data-table
        ref="vuetifyTable"
        :value="selectedItems"
        :footer-props="footerProps"
        :hide-default-footer="tableTotalCount <= itemsPerPage"
        :items-per-page="itemsPerPage"
        :headers="headers"
        :sort-by="sortBy"
        :search="search"
        :show-select="showSelect"
        :single-select="singleSelect"
        :items="items"
        @input="$emit('input', $event)"
        @item-selected="$emit('itemSelected', $event)"
    >
        <template #top>
            <v-row
                v-if="showButton || showSearch"
                class="mb-1"
            >
                <v-col
                    v-if="showButton"
                    cols="12"
                    md="8"
                >
                    <actions-btn
                        :icon="buttonIcon"
                        :title="buttonTitle"
                        :type="buttonType"
                        @click="$emit('button-click')"
                    />
                </v-col>
                <v-col
                    v-if="showSearch"
                    cols="12"
                    md="4"
                >
                    <v-text-field
                        v-model="search"
                        prepend-inner-icon="fal fa-search"
                        :label="$t('search')"
                        prepend-icon
                        hide-details
                        clearable
                        outlined
                        dense
                    />
                </v-col>
            </v-row>
        </template>

        <template
            v-for="slot in slots"
            #[slot]="{ item }"
        >
            <slot
                :name="slot"
                :item="item"
            />
        </template>
    </v-data-table>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: {
        headers: {
            type: Array,
            default: () => [],
        },
        selectedItems: {
            type: Array,
            default: () => [],
        },
        items: {
            type: Array,
            default: () => [],
        },
        showSelect: {
            type: Boolean,
            default: false,
        },
        singleSelect: {
            type: Boolean,
            default: false,
        },
        itemsPerPage: {
            type: Number,

            // this.getPagination ? this.getPagination.default : 0,
            default: 5,
        },
        sortBy: {
            type: String,
            default: '',
        },
        showButton: {
            type: Boolean,
            default: true,
        },
        buttonTitle: {
            type: String,
            default: 'addNew',
        },
        buttonType: {
            type: String,
            default: 'submit',
        },
        buttonIcon: {
            type: String,
            default: 'fal fa-plus',
        },
        showSearch: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            search: '',
            slots: [],
        }
    },
    computed: {
        ...mapGetters(['getPagination']),
        tableTotalCount() {
            return this.items.length
        },
        footerProps() {
            if (!this.getPagination) return
            const
                allowedSelection = []
            const perPageOptions = Object.values(this.getPagination)
            perPageOptions.forEach((per, index) => {
                if (this.tableTotalCount <= this.itemsPerPage) allowedSelection.push(this.itemsPerPage)
                else {
                    if (per <= this.tableTotalCount) allowedSelection.push(per)
                    if (this.tableTotalCount > perPageOptions[index - 1]) allowedSelection.push(per)
                }
            })
            return {
                showFirstLastPage: true,
                showCurrentPage: true,
                itemsPerPageOptions: allowedSelection,
                disableItemsPerPage: false,
            }
        },
    },
    mounted() {
        const table = this.$refs.vuetifyTable
        this.slots = Object.keys(table.$parent.$scopedSlots)
    },
}
</script>
