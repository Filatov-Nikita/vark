<template>
  <div class="post">
    <div class="date">{{ dt }}</div>
    <h1 class="h3 h-mb-40">{{ post.title }}</h1>
    <div class="img-wrap">
      <img class="photo" v-if="post.image" :width="post.image.width" :height="post.image.height" :src="post.image.url" />
    </div>
    <div class="body" v-html="post.body"></div>
  </div>
</template>

<script setup lang="ts">
  import type { PostDetailed } from '@/types/posts/detailed';

  const props = defineProps<{
    post: PostDetailed,
  }>();

  const dt = computed(() => {
    return prettyDate(props.post.created_at);
  });
</script>

<style scoped lang="scss">
  .post {
    max-width: 900px;
    padding-bottom: 70px;

    @include sm {
      padding-bottom: 35px;
    }
  }

  .date {
    @apply tw-text-body-m-regular tw-text-text-gray tw-mb-16;

    @include sm {
      @apply tw-text-body-s-regular tw-mt-12;
    }
  }

  .img-wrap {
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 30px;

    @include sm {
      margin-bottom: 20px;
    }
  }

  .photo {
    width: 100%;
  }

  .body {
    white-space: pre-wrap;
    font-size: 18px;
    line-height: 1.4;

    @include sm {
      font-size: 16px;
    }

    :deep(p + p) {
      margin-top: 20px;
    }
  }
</style>
