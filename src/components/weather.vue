<template>
  <div class="weather">
    <div class="weather-time">
      <div>{{ timeObj.year + '年' + timeObj.month + '月' + timeObj.day + '日' }}</div>
      <div>{{ timeObj.hours + ':' + timeObj.minutes + ':' + timeObj.seconds }}</div>
    </div>
    <div class="weather-icon">
      <div>晴</div>
      <img src="@/assets/image/home/sunny.png" alt="" />
      <div>0℃~5℃</div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import GetDate from '@/utils/getDate.js'

const getDate = new GetDate()
let timeObj = ref({})
onMounted(() => {
  timeObj.value = getDate.getNowDate()
})
</script>

<style scoped lang="scss">
.weather {
  display: flex;
  align-items: center;
  gap: 10px;
  //   background: red;
  .weather-time {
    height: 30px;
    display: flex;
    align-items: center;
    text-align: center;
    div{
      opacity: 1;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 2px;
      line-height: 48.02px;
      color: rgba(173, 254, 254, 1);
    }

  }
  .weather-icon {
    display: flex;
    gap: 5px;
    align-items: center;
    div {
      opacity: 1;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 2px;
      line-height: 48.02px;
      color: rgba(173, 254, 254, 1);
    }
    img {
      width: 25px;
      height: 25px;
      transform: translateY(2px);
    }
  }
}
</style>