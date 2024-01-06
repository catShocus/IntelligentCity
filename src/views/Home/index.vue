<template>
  <div class="home">
    <!-- <Map></Map> -->
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

<script setup></script>

<style lang="scss" scoped>
@import url('@/assets/css/panel.css');
.home {
  position: relative;
  // border: 1px solid red;
  width: 100vw;
  height: 100vh;
  background: #01281f;
  // back
  .header {
    position: relative;
    width: 100%;
    height: 94px;
    background-image: url('@/assets/image/home/header.png');
    background-size: contain;
    background-repeat: no-repeat;

    // border: 1px solid green;
    .header-title {
      text-align: center;
      line-height: 80px;
      span {
        display: inline-block;
        width: 385px;
        height: 50px;
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
      top: 3px;
      right: 15px;
      width: 330px;
      text-align: center;
    }
  }
  .content {
    transform: translate(478px, 16px);
    // border: 1px solid red;
    width: 580px;
    height: calc(100% - 115px);
    border-radius: 10px;
    background-image: url('@/assets/image/home/building.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
}
</style>
