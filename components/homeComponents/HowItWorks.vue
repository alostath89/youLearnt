<template>
    <div class="how-works">
        <v-container class="my-14">
            <v-row>
                <v-col cols="12" md="6" class="px-0 mb-3 mb-md-0 px-md-4">
                    <v-img class="w-100 rounded" src="http://akwade.net/youlearnt/assets/img/how-it-works-section.png" />
                </v-col>
                <v-col cols="12" md="6" class="px-0 px-md-4">
                    <h1 class="font-weight-medium mb-6">
                        <span class="textdark--text">How It Works</span> <span class="textmuted--text fs-14">if you're student</span>
                    </h1>
                    <div class="items">
                        <div class="item rounded">
                            <span class="d-flex align-center font-weight-regular">
                                <h1 class="textmuted--text me-2 font-weight-regular">01</h1>
                                <h2 class="textdark--text font-weight-medium">Create your account</h2>
                            </span>
                            <p class="mt-3 textmuted--text p-0 m-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elitmoro. Acc aspernatur atque consequatur error eveniet impedit nece
                            </p>
                        </div>
                        <div class="item active rounded">
                            <span class="d-flex align-center font-weight-regular">
                                <h1 class="textmuted--text me-2 font-weight-regular">02</h1>
                                <h2 class="textdark--text font-weight-medium">Create your account</h2>
                            </span>
                            <p class="mt-3 textmuted--text p-0 m-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elitmoro. Acc aspernatur atque consequatur error eveniet impedit nece
                            </p>
                        </div>
                        <div class="item rounded">
                            <span class="d-flex align-center font-weight-regular">
                                <h1 class="textmuted--text me-2 font-weight-regular">02</h1>
                                <h2 class="textdark--text font-weight-medium">Create your account</h2>
                            </span>
                            <p class="mt-3 textmuted--text p-0 m-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elitmoro. Acc aspernatur atque consequatur error eveniet impedit nece
                            </p>
                        </div>
                        <div class="item rounded">
                            <span class="d-flex align-center font-weight-regular">
                                <h1 class="textmuted--text me-2 font-weight-regular">04</h1>
                                <h2 class="textdark--text font-weight-medium">Create your account</h2>
                            </span>
                            <p class="mt-3 textmuted--text p-0 m-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elitmoro. Acc aspernatur atque consequatur error eveniet impedit nece
                            </p>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped lang="scss">
.how-works .item {
  background: #F7F7F7;
  border: solid 1px #D1E9FF;
  min-height: 135px;
  margin-bottom: 16px;
  padding: 20px;
  &.active {
    background: #2F4886 !important;
    .textmuted--text {
      color: #fff !important;
      opacity: 0.9;
    }
    .textdark--text {
      color: #fff !important;
    }
  }
}
</style>
