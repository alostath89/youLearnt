<template>
  <v-container>
    <section class="my-12">
      <h2 class="mb-8 text-center font-weight-medium">
        {{ $t('Latest posts from YouLearnt blog') }}
      </h2>
      <v-row>
        <v-col cols="12" md="6">
          <PostCardColumn />
        </v-col>
        <v-col cols="12" md="6">
          <PostCardRow />
          <PostCardRow />
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

