<template>
  <div class="register-container">
    <div class="box">
      <div class="register-box">
        <div class="container">
          <div class="title">注册</div>
          <div class="account">
              <el-input v-model="account" class="w-50 m-2 input-account" placeholder="请输入用户名">
                <template #prefix>
                  <el-icon><User /></el-icon>
                </template>
              </el-input>

          </div>
        </div>
      </div>
      <div class="bgi"></div>
    </div>
  </div>
</template>

<script setup>
import {  User } from '@element-plus/icons-vue'
let account = ref("")
</script>

<style lang="scss" scoped>
.register-container {
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0);
  z-index: 100;
  background-image: url('/images/register/背景.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 100px 0;
}

.box {
  .register-box {
    position: absolute;
    bottom: 150px;
    right: 100px;
    z-index: 100;
    width: 600px;
    height: 350px;
    transform: translate(20px, -400px);
    background-image: url('/images/register/bgi.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 20px 0px;

    .container {
      width: 400px;
      height: 350px;
      margin: 0 auto;
      transform: translateY(50px);
      background-image: url('/images/register/box.png');
      background-repeat: no-repeat;
      background-size: contain;
      display: flex;
      flex-direction: column;

      .title{
        text-align: center;
        color: orange;
        width: 100%;
        font-size: 25px;
        font-family: KaiTi;
        font-weight: 700;
        margin: 10px 0px;
      }
      .input-account{
        width:80%;
        margin: 20px auto;
        color:black;
        height: 40px;
        margin-left:40px;
        
        &::placeholder{
            color: aqua;

        }
      }
    }
  }
  .bgi {
    position: absolute;
    bottom: 100px;
    right: 100px;
    z-index: 100;
    width: 500px;
    height: 400px;
    background-image: url('/images/register/圆环.png');
    background-size: contain;
    background-repeat: no-repeat;
    box-shadow: none !important;
  }
}
</style>
