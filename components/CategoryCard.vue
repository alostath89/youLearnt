<template>
    <div class="category-card">
        <router-link to="#" class="link">
            <img src="http://akwade.net/youlearnt/assets/img/more.png">
            <span>Programming</span>
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
.category-card {
  padding: 2px;
  .link {
    position: relative;
    img {
      width: 100%;
      height: 225px;
      border-radius: 6px;
      object-fit: cover;
    }
    span {
      font-weight: bold;
      width: 150px;
      display: flex;
      text-align: center;
      align-content: center;
      align-items: center;
      right: 50%;
      transform: translateX(50%);
      border-radius: 0.3rem;
      background: #fff;
      position: absolute;
      font-weight: 500;
      border: 1px solid #dee2e6!important;
      padding: 1.2rem;
      top: 0px;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
  }
}
</style>
