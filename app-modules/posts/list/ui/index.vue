<template>
  <div>
    <List v-if="posts" :posts="posts" />
    <div class="btn" v-if="!isEnd">
      <BaseButton size="sm" :disabled="loading" @click="loadMore">Показать еще</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
  import List from './List.vue';
  import type { PostListItem } from '@/types/posts/listItem';
  import type { PaginateRes } from '@/types/shared/paginate';

  const { data: posts, isEnd, loading, asyncLoad, loadMore, setPaginate } = usePaginate('posts.', ({ page }) => {
    return $fetch<PaginateRes<PostListItem[]>>('posts', {
      baseURL: useAppConfig().apiPrefix,
      query: { page: page.value },
    });
  });

  const res = await asyncLoad();

  if(res.error.value || !res.data.value) {
    throw createError({
      statusCode: res.error.value?.statusCode ?? 500,
      fatal: true,
    });
  }

  setPaginate(res.data.value);
</script>

<style scoped lang="scss">
  .btn {
    margin-top: 60px;
    @apply tw-text-center;
  }
</style>
