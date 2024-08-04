<template>
  <div class="posts page-pt page-pb">
    <div class="wrapper">
      <h1 class="h1 h-mb-50">Новости</h1>
      <PostList />
    </div>
  </div>
</template>

<script setup lang="ts">
  import PostList from '@/app-modules/posts/list/ui/index.vue';
</script>
