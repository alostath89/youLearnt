<template>
    <section class="hero pt-12" :style="{ 'background-image': 'url(' + hero_data.hero_background + ')' }">
        <div class="overlay" />
        <v-container class="z-1000 pt-16">
            <v-row align="center" class="pt-16">
                <v-col sm="6" cols="12">
                    <h1 class="font-weight-medium fs-32 white--text">
                        {{ hero_data.hero_heading }}
                    </h1>
                    <div class="search-group">
                        <input
                            type="text"
                            placeholder="Search for courses, tutors, and keywords"
                        >
                        <v-btn color="secondary">
                            <VIcon>mdi-magnify</VIcon> Search
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
export default {
    data() {
        return {
            hero_data: {
                hero_heading: 'We aim to make it easy for anyone to learn or teach any subject in any language, anytime, anywhere.',
                hero_background: 'http://akwade.net/youlearnt/assets/img/bg-header.png',
            },
        }
    },
}
</script>

<style lang="scss" scoped>
.hero {
  background-size: cover;
  position: relative;
  height: 70vh;
  display: flex;
  align-items: center;
  background-position: center;
  h1 {
    text-shadow: rgba(0, 0, 0, 0.5) 1px 1px 0;
    line-height: 1.2;
  }
  .search-group {
    position: relative;
    margin-top: 44px;
    input {
      background: #fff !important;
      padding: 26px;
      width: 100%;
      border-radius: 100px;
      @media screen and (max-width: 720px) {
        padding: 15px;
        font-size: 13px;
      }
    }
    button {
      position: absolute;
      top: 10px;
      box-shadow: none;
      @media screen and (max-width: 720px) {
        padding: 14px;
        top: 7px;
        right: 7px;
      }
      right: 10px;
      border-radius: 100px;
      padding: 28px;
    }
  }
  .overlay {
    background: #2F4886;
    position: absolute;
    opacity: 0.32;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
}

</style>
