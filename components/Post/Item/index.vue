<template>
  <NuxtLink class="post" to="/">
    <div class="post__img-wrap">
      <img class="post__img" :width="post.image.width" :height="post.image.height" :src="post.image.path" :alt="post.title" />
    </div>
    <div class="post__date">{{ post.created_at }}</div>
    <div class="post__title">{{ post.title }}</div>
  </NuxtLink>
</template>

<script setup lang="ts">
  import type { PostListItem } from '@/types/posts/listItem';

  interface Props {
    post: PostListItem,
  };

  defineProps<Props>();
</script>

<style scoped lang="scss">
  .post {
    display: block;

    &__img-wrap {
      border-radius: 20px;
      overflow: hidden;
      height: 387px;
    }

    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    &__date {
      font-size: 16px;
      line-height: 1.25;
      @apply tw-mt-20 tw-text-text-gray;
    }

    &__title {
      @apply tw-mt-12 tw-text-body-m-regular;
    }
  }
</style>
