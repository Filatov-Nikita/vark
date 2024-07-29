<template>
  <section class="posts white-area">
    <div class="wrapper">
      <h2 class="h2 tw-mb-10">Новости</h2>
      <Swiper
        :space-between="30"
        :slides-per-view="1.7"
        @swiper="onSlider"
      >
        <template v-slot:container-start>
          <SwiperNav class="tw-mb-12 tw-justify-end"
            @prev="swiper.slidePrev()"
            @next="swiper.slideNext()"
          />
        </template>
        <SwiperSlide>
          <PostItem :post="post1" />
        </SwiperSlide>
        <SwiperSlide>
          <PostItem :post="post1" />
        </SwiperSlide>
      </Swiper>
      <div class="posts__btn">
        <BaseButton>ПОСМОТРЕТЬ ВСЕ</BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import PostItem from './PostItem.vue';
  import PostImage from './assets/1.jpg';

  const post1 = {
    image: {
      width: 1408,
      height: 940,
      path: PostImage,
    },
    created_at: '2 июня 2024',
    title: 'ООО «ВАРК» участвовал в выставке «Газ. Нефть. Технологии» в 2024 г. Выставка проходит в ЭКСПО-центре',
  };

  const swiper = ref<any>(null);

  function onSlider(_swiper: any) {
    swiper.value = _swiper;
  }
</script>

<style scoped lang="scss">
  .posts {
    padding-top: 80px;
    padding-bottom: 120px;

    &__btn {
      margin-top: 50px;
      text-align: center;
    }
  }
</style>
