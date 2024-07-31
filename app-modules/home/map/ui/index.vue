<template>
  <section class="map">
    <div class="wrapper">
      <h2 class="h2 h-mb-50">География поставок</h2>
      <div class="wrap">
        <img width="1800" height="954" src="./assets/map.png" alt="карта поставок" loading="lazy">
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
  .map {
    padding-top: 80px;
    padding-bottom: 140px;
  }

  .wrap {
    position: relative;
  }

  .layer {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  .slide-enter-active {
    animation: fadeInDown;
    animation-duration: 1s;
  }
</style>
