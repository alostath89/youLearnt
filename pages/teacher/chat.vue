<template>
    <v-row class="chat">
        <v-col cols="12" md="4">
            <v-card outlined class="pa-3">
                <text-field
                    :value.sync="search"
                    type="text"
                    class="search-input"
                    append-icon="fal fa-search"
                    :rules="{ required: false }"
                    sub-label="search"
                />

                <v-list-item-group color="primary">
                    <v-list-item
                        v-for="(item, i) in 5"
                        :key="i"
                        class="chat"
                    >
                        <v-list-item-content>
                            <div class="chat-block">
                                <v-avatar class="me-3" size="50">
                                    <img
                                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                                        alt="John"
                                    >
                                </v-avatar>
                                <div class="w-100">
                                    <div class="d-flex justify-space-between">
                                        <span class="primary-bold">
                                            Muhammad Shublaq
                                        </span>

                                        <span class="text-caption">
                                            2022/10/1
                                        </span>
                                    </div>
                                    <div class="text-caption">
                                        Last seen 10AM
                                    </div>
                                </div>
                            </div>
                            <div class="text-caption mt-2">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, fugiat. Ab vel, totam natus molestias consectetur impedit provident distinctio deserunt.
                            </div>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-card>
        </v-col>

        <v-col cols="12" md="8">
            <v-card outlined>
                <div class="chat-header">
                    <div class="d-flex align-center">
                        <v-avatar class="me-3" size="70">
                            <img
                                src="https://cdn.vuetifyjs.com/images/john.jpg"
                                alt="John"
                            >
                        </v-avatar>
                        <div>
                            <h2 class="primary-bold">
                                Muhammad Shublaq
                            </h2>

                            <p class="mt-2">
                                2022/10/1
                            </p>
                        </div>
                    </div>
                    <v-btn icon x-large>
                        <v-icon>
                            fas fa-ellipsis-v
                        </v-icon>
                    </v-btn>
                </div>
                <div class="chat-box sender">
                    <v-avatar class="me-3" size="50">
                        <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                        >
                    </v-avatar>
                    <p class="message">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eligendi deleniti nostrum ex magni aliquid nam ratione, soluta eveniet ipsa omnis necessitatibus repellendus! Molestiae ad rem tenetur aliquam id omnis, soluta, quis sit, animi quas officiis officia asperiores molestias ullam architecto repellat incidunt cumque veritatis ea excepturi earum nobis. Libero voluptate alias totam pariatur porro velit molestias voluptatem delectus rem unde optio expedita tenetur aliquid, facere excepturi aspernatur consequatur.
                    </p>
                </div>
                <div class="chat-box receiver">
                    <p class="message">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eligendi deleniti nostrum ex magni aliquid nam ratione, soluta eveniet ipsa omnis necessitatibus repellendus! Molestiae ad rem tenetur aliquam id omnis, soluta, quis sit, animi quas officiis officia asperiores molestias ullam architecto repellat incidunt cumque veritatis ea excepturi earum nobis. Libero voluptate alias totam pariatur porro velit molestias voluptatem delectus rem unde optio expedita tenetur aliquid, facere excepturi aspernatur consequatur.
                    </p>
                    <v-avatar class="ms-3" size="50">
                        <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                        >
                    </v-avatar>
                </div>
                <div class="chat-box sender">
                    <v-avatar class="me-3" size="50">
                        <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                        >
                    </v-avatar>
                    <p class="message">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eligendi deleniti nostrum ex magni aliquid nam ratione, soluta eveniet ipsa omnis necessitatibus repellendus! Molestiae ad rem tenetur aliquam id omnis, soluta, quis sit, animi quas officiis officia asperiores molestias ullam architecto repellat.
                    </p>
                </div>
                <div class="chat-box sender">
                    <v-avatar class="me-3" size="50">
                        <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                        >
                    </v-avatar>
                    <p class="message">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eligendi deleniti nostrum ex magni aliquid nam ratione, soluta eveniet ipsa omnis necessitatibus repellendus! Molestiae ad rem tenetur.
                    </p>
                </div>
                <div class="chat-box receiver">
                    <p class="message">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eligendi deleniti nostrum ex magni aliquid nam ratione, soluta eveniet ipsa omnis necessitatibus repellendus! Molestiae ad
                    </p>
                    <v-avatar class="ms-3" size="50">
                        <img
                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                            alt="John"
                        >
                    </v-avatar>
                </div>
                <div class="chat-field pa-4">
                    <v-text-field
                        v-model="message"
                        outlined
                        hide-details
                        clearable
                        label="Message"
                        type="text"
                    >
                        <template #append>
                            <v-btn icon @click.stop="">
                                <v-icon small>
                                    fal fa-laugh
                                </v-icon>
                            </v-btn>
                            <v-btn class="mx-2" icon>
                                <v-icon small>
                                    fal fa-paperclip
                                </v-icon>
                            </v-btn>
                            <actions-btn class="send" color="secondary" icon="fal fa-paper-plane" title="Send" />
                        </template>
                    </v-text-field>
                </div>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    meta: { title: 'chat' },
    layout: 'dashboard',
    data() {
        return {
            message: null,
            search: null,
        }
    },
}
</script>
