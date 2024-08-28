<template>
  <section class="items">
    <h2 class="h2 tw-mb-10">Другие новости</h2>
    <Swiper
      :space-between="20"
      :slides-per-group="1"
      :slides-per-view="1.3"
      @swiper="swiper = $event"
      :breakpoints="{
        720: {
          'spaceBetween': 40,
          'slidesPerGroup': 2,
          'slidesPerView': 2,
        },
      }"
    >
      <template #container-start>
        <SwiperNav class="tw-justify-end tw-mb-8 sw-nav" design="dark" @prev="swiper.slidePrev()" @next="swiper.slideNext()" />
      </template>
      <SwiperSlide
        v-for="post in posts"
      >
        <PostItem :post="post" />
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup lang="ts">
  import type { PostListItem } from '@/types/posts/listItem';

  defineProps<{
    posts: PostListItem[],
  }>();

  const swiper = ref<any>(null);
</script>

<style scoped lang="scss">
  .items {
    padding-top: 70px;

    @include sm {
      padding-top: 35px;
    }
  }

  .sw-nav {
    @include sm {
      display: none;
    }
  }
</style>
