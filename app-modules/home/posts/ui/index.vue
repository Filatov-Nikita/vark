<template>
  <section class="posts white-area">
    <div class="wrapper">
      <h2 class="h2 title">Новости</h2>
      <Swiper
        v-if="posts"
        :space-between="10"
        :slides-per-view="1.1"
        :breakpoints="{
          720: {
            'spaceBetween': 30,
            'slidesPerView': 1.7,
          }
        }"
        @swiper="onSlider"
      >
        <template v-slot:container-start>
          <SwiperNav class="posts__nav tw-mb-12 tw-justify-end"
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
      <div class="posts__btn-wrap">
        <BaseButton class="posts__btn" :to="{ name: 'posts' }">Посмотреть все</BaseButton>
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

    @include sm {
      padding-top: 35px;
      padding-bottom: 70px;
    }

    &__btn-wrap {
      margin-top: 50px;
      text-align: center;

      @include sm {
        margin-top: 40px;
      }
    }

    &__btn {
      @include sm {
        width: 100%;
      }
    }

    &__nav {
      @include sm {
        display: none;
      }
    }
  }

  .item :deep(.post__img-wrap) {
    height: 470px;

    @include sm {
      height: 230px;
    }
  }

  .title {
    @apply tw-mb-10;

    @include sm {
      @apply tw-mb-20;
    }
  }
</style>
