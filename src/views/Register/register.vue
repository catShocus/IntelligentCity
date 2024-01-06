<template>
  <div class="register-container">
    <div class="box">
      <div class="register-box">
        <div class="container">
          <div class="undeline"></div>
          <div class="title">注册</div>
          <div class="left-loading"><span></span><span></span><span></span></div>
          <div class="right-loading"><span></span><span></span><span></span></div>
          <div class="account">
            <el-input
              v-model.trim="account"
              class="w-50 m-2 input-account"
              placeholder="请输入用户名"
            >
              <template #prefix>
                <el-icon><User /></el-icon>
              </template>
            </el-input>
          </div>
          <div class="password">
            <form>
              <el-input
                v-model.trim="password"
                type="password"
                show-password
                class="w-50 m-2 input-password"
                placeholder="请输入密码"
              >
                <template #prefix>
                  <el-icon><View /></el-icon>
                </template>
              </el-input>
            </form>
          </div>
          <div class="rePassword">
            <form>
              <el-input
                v-model.trim="rePassword"
                type="password"
                show-password
                class="w-50 m-2 input-rePassword"
                placeholder="请再次输入密码"
              >
                <template #prefix>
                  <el-icon><View /></el-icon>
                </template>
              </el-input>
            </form>
          </div>
          <button class="btn-group">
            <button class="sign-in" @click="toLogin">登录</button
            ><button class="sign-up" @click="register">注册</button>
          </button>
        </div>
      </div>
      <div class="bgi"></div>
    </div>
  </div>
</template>

<script setup>
import { User, View } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
let account = ref('')
let password = ref('')
let rePassword = ref('')
let router = useRouter()
const toLogin = () => {
  router.push('/login')
}
const register = () => {
  console.log('456')

  if (account.value && password.value && rePassword.value && rePassword.value == password.value) {
    ElMessage({
      message: '注册成功!',
      type: 'success',
      duration: 500,
    })
    let time1 = setTimeout(() => {
      ElMessage({
        message: '准备前往登录页面...',
        type: 'success',
        duration: 500,
      })
    }, 500)
      let time2 = setTimeout(() => {
        router.push('/login')
        clearTimeout(time1)
        clearTimeout(time2)
      }, 1500)
  } else {
    ElMessage({
      message: '注册失败',
      type: 'error',
      duration: 1500,
    })
  }
}
</script>

<style lang="scss" scoped>
.btn-group {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  gap: 150px;
  border: none;
  margin-top: 10px;
  font-size: 14px !important;
  .sign-in {
    cursor: pointer;
    width: 90px;
    height: 30px;
    background-image: url('@/assets/image/register/按钮2.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-color: transparent;
    color: white;
    border: none;
    font-size: 14px !important;
    box-shadow: 2px 2px 5px rgba(0, 242, 255, 0.399);
    &:hover {
      background-image: url('@/assets/image/register/按钮1.png');
    }
  }
  .sign-up {
    cursor: pointer;
    width: 90px;
    height: 30px;
    background-image: url('@/assets/image/register/按钮2.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-color: transparent;
    color: white;
    font-size: 14px !important;
    border: none;
    box-shadow: 2px 2px 5px rgba(0, 242, 255, 0.399);
    &:hover {
      background-image: url('@/assets/image/register/按钮1.png');
    }
  }
}
.w-50 {
  display: block;
  // transform: translate(40px,-10px);
  width: 85% !important;
  height: 38px;
  margin: 5px auto !important;
}
::v-deep(.w-50 .el-input__wrapper) {
  width: 100%;
  height: 38px;
}

@-webkit-keyframes bounce-in-top {
  0% {
    -webkit-transform: translateY(-500px);
    transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
    transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
    transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
@keyframes bounce-in-top {
  0% {
    -webkit-transform: translateY(-500px);
    transform: translateY(-500px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateY(-65px);
    transform: translateY(-65px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateY(-28px);
    transform: translateY(-28px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
@keyframes colorTransition {
  0% {
    background-color: transparent;
  }
  33.33% {
    background-color: #5cffef20;
  }
  66.66% {
    background-color: #5cffef50;
  }
  100% {
    background-color: #5cffef;
  }
}
@keyframes undeline {
  0% {
    transform: translate(-50%, 0);
    box-shadow: 0px 5px 10px aqua;
    background: rgb(0, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(0, 255, 255, 1) 10%,
      rgba(0, 255, 255, 1) 48%,
      rgba(12, 241, 201, 1) 50%,
      rgba(0, 255, 255, 1) 52%,
      rgba(0, 255, 255, 1) 90%
    );
  }
  100% {
    transform: translate(-50%, 7px);
    box-shadow: 0px 10px 10px aqua;
    background-color: rgba(12, 241, 201, 1);
  }
}

.register-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0);
  z-index: 100;
  background-image: url('@/assets/image/register/背景.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 100px 0;
}

.box {
  .register-box {
    -webkit-animation: bounce-in-top 1.1s both;
    animation: bounce-in-top 1.1s both;
    // border: 1px solid red;
    position: absolute;
    bottom: 420px;
    right: 100px;
    z-index: 100;
    width: 600px;
    height: 350px;
    transform: translate(20px, 0px);
    background-image: url('@/assets/image/register/bgi.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 20px 0px;

    .container {
      width: 400px;
      height: 250px;
      margin: 0 auto;
      transform: translateY(50px);
      background-image: url('@/assets/image/register/box3.png');

      background-repeat: no-repeat;

      background-size: contain;
      display: flex;
      flex-direction: column;
      .left-loading {
        position: absolute;
        top: 10px;
        left: 10px;
        display: flex;
        gap: 5px;
        span {
          display: inline-block;
          width: 20px;
          height: 10px;
          border: 1px solid white;
          animation: colorTransition 1.5s ease-out infinite;
          &:nth-child(1) {
            animation-delay: 0s;
          }
          &:nth-child(2) {
            animation-delay: 0.5s;
          }
          &:nth-child(3) {
            animation-delay: 1s;
          }
        }
      }

      .right-loading {
        position: absolute;
        top: 10px;
        right: 10px;
        display: flex;
        gap: 5px;

        span {
          display: inline-block;
          width: 20px;
          height: 10px;
          border: 1px solid white;
          animation: colorTransition 1.5s ease-out infinite;
          &:nth-child(3) {
            animation-delay: 0s;
          }
          &:nth-child(2) {
            animation-delay: 0.5s;
          }
          &:nth-child(1) {
            animation-delay: 1s;
          }
        }
      }

      .title {
        text-align: center;
        color: orange;
        width: 100%;
        font-size: 25px;
        font-family: KaiTi;
        font-weight: 700;
        margin: 10px 0px;
      }
      .input-account {
        width: 80%;
        margin: 20px auto;
        color: black;
        height: 40px;
        margin-left: 40px;

        &::placeholder {
          color: aqua;
        }
      }
    }
  }
  .bgi {
    -webkit-animation: bounce-in-top 1.1s both;
    animation: bounce-in-top 1.1s both;
    position: absolute;
    bottom: 50px;
    right: 100px;
    z-index: 100;
    width: 500px;
    height: 400px;
    background-image: url('@/assets/image/register/圆环.png');
    background-size: contain;
    background-repeat: no-repeat;
    box-shadow: none !important;
  }
  .undeline {
    position: absolute;
    bottom: 5px;
    left: 50%;

    width: 100px;
    height: 2px;
    animation: undeline 1.5s ease-in-out alternate infinite;
  }
}
</style>
