<template>
  <NuxtLink class="post" :to="{ name: 'posts-slug', params: { slug: post.slug } }">
    <div class="post__img-wrap">
      <img v-if="post.thumbnail" class="post__img" :width="post.thumbnail.width" :height="post.thumbnail.height" :src="post.thumbnail.url" :alt="post.title" />
    </div>
    <div class="post__date">{{ dt }}</div>
    <div class="post__title">{{ post.title }}</div>
  </NuxtLink>
</template>

<script setup lang="ts">
  import type { PostListItem } from '@/types/posts/listItem';

  interface Props {
    post: PostListItem,
  };

  const props = defineProps<Props>();

  const dt = computed(() => {
    return prettyDate(props.post.created_at);
  });
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

      @include sm {
        font-size: 14px;
        margin-top: 14px;
      }
    }

    &__title {
      @apply tw-mt-12 tw-text-body-m-regular;

      @include sm {
        @apply tw-mt-10 tw-text-body-s-regular;
      }
    }
  }
</style>
