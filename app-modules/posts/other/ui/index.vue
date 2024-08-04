<template>
  <section class="items">
    <h2 class="h2 tw-mb-10">Другие новости</h2>
    <Swiper
      :space-between="40"
      :slides-per-group="2"
      :slides-per-view="2"
      @swiper="swiper = $event"
    >
      <template #container-start>
        <SwiperNav class="tw-justify-end tw-mb-8" design="dark" @prev="swiper.slidePrev()" @next="swiper.slideNext()" />
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
  }
</style>
