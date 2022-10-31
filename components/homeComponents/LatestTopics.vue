<template>
    <v-container class="my-16">
        <h2 class="textdark--text text-center font-weight-medium mb-7">
            Latest topics in our community
        </h2>
        <div class="topics flex-column flex-sm-row">
            <router-link to="#" class="topic-card mb-3 mb-sm-0 me-sm-3">
                Music
            </router-link>
            <router-link to="#" class="topic-card mb-3 mb-sm-0 me-sm-3">
                Music
            </router-link>
            <router-link to="#" class="topic-card mb-3 mb-sm-0 me-sm-3">
                Music
            </router-link>
            <router-link to="#" class="topic-card mb-3 mb-sm-0 me-sm-3">
                Music
            </router-link>
            <router-link to="#" class="topic-card mb-3 mb-sm-0 me-sm-3">
                Music
            </router-link>
        </div>
    </v-container>
</template>

<style scoped lang="scss">
.topics {
  display: flex;
  .topic-card {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 124px;
    border-radius: 4px;
    width: 100%;
    background-position: center;
    background-size: cover;
    font-size: 25px;
    font-weight: bold;
    color: #FFF !important;
    text-decoration: none;
    position: relative;
    //background: url("http://akwade.net/youlearnt/assets/img/community-blox-img-1.png") no-repeat;
    background: #2f4986;
    font-weight: 500;
  }
}
</style>
