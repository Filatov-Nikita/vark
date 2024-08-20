<template>
  <section class="posts white-area">
    <div class="wrapper">
      <h2 class="h2 tw-mb-10">Новости</h2>
      <Swiper
        v-if="posts"
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
        <SwiperSlide
          v-for="post in posts.data"
          :key="post.id"
        >
          <PostItem class="item" :post="post" />
        </SwiperSlide>
      </Swiper>
      <div class="posts__btn">
        <BaseButton :to="{ name: 'posts' }">Посмотреть все</BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import type { PostListItem } from '@/types/posts/listItem';
  import type { DataRes } from '@/types/shared/response';

  const { data: posts } = await useFetch<DataRes<PostListItem[]>>('posts', { baseURL: useAppConfig().apiPrefix, query: { page: 1 } });

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

  .item :deep(.post__img-wrap) {
    height: 470px;
  }
</style>
