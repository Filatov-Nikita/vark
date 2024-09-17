<template>
  <div class="switcher">
    <div class="left">
      <Aside :active="active" @change:active="onChange" />
    </div>
    <div class="right">
      <Swiper :modules="[ SwiperEffectFlip ]" effect="flip" :initial-slide="active" @swiper="swiper = $event">
        <SwiperSlide
          v-for="item in items"
        >
          <div class="item">
            <div class="item__img-wrap">
              <img width="1180" height="660" :src="item.image" loading="lazy">
            </div>
            <div class="item__body">
              <p
                v-for="text in item.texts"
                v-html="text"
              ></p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Aside from './Aside.vue';
  import items from '../model/items';

  const swiper = ref<any>(null);
  const active = ref(0);

  function onChange(index: number) {
    if(swiper.value) {
      swiper.value.slideTo(index);
    }
    active.value = index;
  }
</script>

<style scoped lang="scss">
  .switcher {
    display: flex;
    flex-wrap: wrap;
    column-gap: 60px;
    row-gap: 45px;

    @include lg {
      column-gap: 50px;
    }

    @include md {
      justify-content: center;
    }
  }

  .left {
    max-width: 500px;
    width: 100%;

    @include lg {
      max-width: 400px;
    }

    @include md {
      max-width: 100%;
    }
  }

  .right {
    max-width: 638px;
    width: 100%;

    @include lg {
      max-width: 475px;
    }

    @include md {
      max-width: 100%;
    }
  }

  .item {
    background: #2B2B2B;
    border-radius: 20px;
    padding: 20px 24px 40px;
    @apply tw-text-body-m-regular tw-text-white;

    @include sm {
      padding: 16px 12px 32px;
    }

    &__img-wrap {
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 20px;
    }

    &__body {
      p + p {
        margin-top: 12px;
      }
    }
  }
</style>
