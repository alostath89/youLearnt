<template>
    <div class="faq-item mt-2" :class="{ active: isActive }" @click="isActive = !isActive">
        <span class="textdark--text font-weight-medium">How to pla resume work?</span>
        <p class="textmuted--text mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem deserunt ducimus eaque esse excepturi id illo inventore molestiae praesentium quia quod reprehenderit rerum tenetur ullam, unde vero voluptate voluptatibus.
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return { isActive: false }
    },
}
</script>

<style lang="scss" scoped>
  .faq-item {
    background: #f2f2f2;
    padding: 18px;
    cursor: pointer;
    border-radius: 6px;
    border: 1px solid #ddd;
    p {
      display: none;
    }
    &.active {
      p {
        display: block;
      }
    }
  }
</style>
