<template>
  <div class="home">
    <Map></Map>
    <div class="header">
      <div class="header-title">
        <span>智慧孪生社区</span>
      </div>
      <div class="header-weather">
        <!-- 天气组件 -->
        <weather></weather>
      </div>
    </div>
    <div class="content"></div>
    <div class="left-panel">
      <div class="panel-item">
        <div class="title">
          <span>人员管理</span>
        </div>
        <div class="content"></div>
      </div>
      <div class="panel-item">
        <div class="title">
          <span>业务收缴</span>
        </div>
        <div class="content"></div>
      </div>
    </div>
    <div class="right-panel">
      <div class="panel-item">
        <div class="title">
          <span>公共管理</span>
        </div>
        <div class="content"></div>
      </div>
      <div class="panel-item">
        <div class="title">
          <span>消防预警</span>
        </div>
        <div class="content"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted} from 'vue'

onMounted(() => {
 console.log(window.Cesium)
})
</script>

<style lang="scss" scoped>
@import url('@/assets/css/panel.css');
.home {
  position: relative;
  width: 100vw;
  height: 100vh;
  .header {
    position: absolute;
    top: 0px;
    width: 100%;
    height: 97px;
    background-image: url('@/assets/image/home/header.png');
    background-size: contain;
    background-repeat: no-repeat;

    // border: 1px solid green;
    .header-title {
      text-align: center;
      line-height: 80px;
      span {
        // border: 1px solid red;
        display: inline-block;
        width: 385px;
        height: 50px;
        opacity: 1;
        font-size: 35px;
        font-weight: 700;
        letter-spacing: 16px;
        line-height: 48.02px;
        transform: translateY(10px);
        color: rgba(173, 254, 254, 1);
      }
    }
    .header-weather {
      position: absolute;
      top: 10px;
      right: 40px;
      // width: 330px;
      text-align: center;
    }
  }
}
</style>
