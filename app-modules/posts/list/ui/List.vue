<template>
  <div>
    <p v-if="posts.length === 0" class="empty">Ничего не найдено</p>
    <div class="items" v-else>
      <PostItem
        class="item"
        v-for="post in posts"
        :post="post"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { PostListItem } from '@/types/posts/listItem';

  defineProps<{
    posts: PostListItem[],
  }>();
</script>

<style scoped lang="scss">
  .empty {
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    @apply tw-text-h3-bold tw-uppercase;
  }

  .items {
    display: flex;
    flex-wrap: wrap;
    margin: -30px -20px;
  }

  .item {
    margin: 30px 20px;
    width: calc(50% - 40px);
  }
</style>
