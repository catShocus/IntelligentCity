<template>
  <div class="home">
    <!-- <Map></Map> -->
    <div class="header">
      <div class="header-title">
        <span>智慧孪生社区</span>
      </div>
      <div class="header-weather">
        <weather></weather>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.home {
  border: 1px solid red;
  width: 100vw;
  height: 100vh;
  background: #000000;
  .header {
    position: relative;
    width: 100%;
    height: 94px;
    background-image: url('@/assets/image/home/header.png');
    border: 1px solid green;
    .header-title {
      text-align: center;
      line-height: 94px;
      span {
        opacity: 1;
        font-size: 35px;
        font-weight: 700;
        letter-spacing: 16px;
        line-height: 48.02px;
        color: rgba(173, 254, 254, 1);
      }
    }
    .header-weather {
      position: absolute;
      top: 15px;
      right: 35px;
      width: 200px;
      height: 30px;
      border: 1px solid red;
    }
  }
}
</style>
