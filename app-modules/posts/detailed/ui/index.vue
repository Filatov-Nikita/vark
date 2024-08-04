<template>
  <div class="post">
    <div class="date">{{ post.created_at }}</div>
    <h1 class="h3 h-mb-40">{{ post.title }}</h1>
    <div class="img-wrap">
      <img :width="post.image.width" :height="post.image.height" :src="post.image.path" />
    </div>
    <div class="body" v-html="post.body"></div>
  </div>
</template>

<script setup lang="ts">
  import type { PostDetailed } from '@/types/posts/detailed';

  defineProps<{
    post: PostDetailed,
  }>();
</script>

<style scoped lang="scss">
  .post {
    max-width: 900px;
    padding-bottom: 70px;
  }

  .date {
    @apply tw-text-body-m-regular tw-text-text-gray tw-mb-16;
  }

  .img-wrap {
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 30px;
  }

  .body {
    font-size: 18px;
    line-height: 1.4;

    :deep(p + p) {
      margin-top: 20px;
    }
  }
</style>
