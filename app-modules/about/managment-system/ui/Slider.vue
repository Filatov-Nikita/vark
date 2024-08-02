<template>
  <Swiper
    :modules="[ SwiperNavigation ]"
    :navigation="{
      prevEl: '.prev-el',
      nextEl: '.next-el',
    }"
  >
    <button class="prev-el">
      <BaseIcon name="prev" fit colorHex="#C6C6C6" />
    </button>
    <button class="next-el">
      <BaseIcon name="next" fit colorHex="#C6C6C6" />
    </button>
    <SwiperSlide class="slide">
      <div class="item">
        <img class="item__img" width="984" height="1354" src="./assets/sert_1.jpg" loading="lazy" alt="Сертификат">
      </div>
    </SwiperSlide>
    <SwiperSlide class="slide">
      <div class="item">
        <img class="item__img" width="984" height="1354" src="./assets/sert_2.jpg" loading="lazy" alt="Разрешение">
      </div>
    </SwiperSlide>
    <SwiperSlide class="slide">
      <div class="item">
        <img class="item__img" width="984" height="1354" src="./assets/sert_3.jpg" loading="lazy" alt="Сертификат">
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">

</script>


<style scoped lang="scss">
  .item {
    border-radius: 20px;
    border: 24px solid theme('colors.white');
  }

  .slide {
    padding: 0 48px;
  }
</style>
