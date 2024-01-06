<template>
  <div class="weather">
    <div class="weather-tiem">
        
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
  console.log(timeObj.value,'--当前时间对象')
})
</script>

<style scoped lang="scss">
.weather {
  width: 100%;
  height: 100%;
  background: red;
}
</style>