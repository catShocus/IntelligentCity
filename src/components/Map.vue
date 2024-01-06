<template>
  <div id="map"></div>
</template>

<script setup>
import GlobeRotate from '@/utils/setMapRotate.js'
let url = '/earthTexture/科幻.jpg'

onMounted(async () => {
  Cesium.Ion.defaultAccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2ZGFmMTI4MS02Nzk5LTQ2M2QtODM4Yy02ZGFkZTJjY2E1NDIiLCJpZCI6MTU3NTE3LCJpYXQiOjE3MDM1OTg1MTB9.NkvvdRv52LZNWJem2UPCkVMA_h4RMEJlclPqtpsrt-8'
  let viewer = new Cesium.Viewer('map', {
    geocoder: false,
    navigationHelpButton: false,
    homeButton: false,
    sceneModePicker: false,
    timeline: false,
    animation: false,
    fullscreenButton: false,
    infoBox: false,
    selectIndicator: false,
    baseLayerPicker: false
  })
  viewer._cesiumWidget._creditContainer.style.display = 'none'
  viewer.imageryLayers.addImageryProvider(
    new Cesium.SingleTileImageryProvider({
      url: url
    })
  )
  window.viewer = viewer
  const setMapRotate = new GlobeRotate(viewer)
  setMapRotate.startRotate()
})
</script>

<style lang="scss" scoped>
#map {
  width: 100vw;
  height: 100vh;
  background-image: url('');
}
</style>
