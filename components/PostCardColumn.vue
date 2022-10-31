<template>
    <div class="blog-post">
        <img src="http://akwade.net/youlearnt/assets/img/post-blog-2.png">
        <div class="content">
            <h5 class="primary--text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </h5>
            <span class="textdark--text">
                November 29, 2019
            </span>
            <p class="textmuted--text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur distinctio ea excepturi facere fugiat ipsum laboriosam laudantium molestias necessitatibus nesciunt non nostrum numquam quaerat qui tenetur velit, veritatis voluptate voluptatem?
            </p>
            <nuxt-link class="primary--text" to="#">
                Continue Reading
            </nuxt-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
  .blog-post {
    border: 1px solid #ccc;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    height: 536px;
    overflow: hidden;
    align-items: center;
    img {
      width: 100%;
      object-position: center;
      object-fit: cover;
      height: 260px;
    }
    .content {
      padding: 20px;
      h5 {
        font-size: 20px;
        line-height: 1.2;
        font-weight: 500;
        padding: 0;
        margin: 0;
      }
      span {
        display: block;
        font-size: 14px;
        margin: 16px 0;
      }
      p {
        padding: 0;
        margin: 0;
        font-size: 14px;
      }
      a {
        font-size: 14px;
        font-weight: 400;
        margin-top: 16px;
        display: block;
      }
    }
  }
</style>
