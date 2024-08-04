<template>
  <div>
    <List :posts="[ post1, post1, post1 ]" />
    <div class="btn">
      <BaseButton size="sm">Показать еще</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
  import List from './List.vue';
  import PostImage from '@/app-modules/home/posts/ui/assets/1.jpg';

  const post1 = {
    image: {
      width: 1408,
      height: 940,
      path: PostImage,
    },
    created_at: '2 июня 2024',
    title: 'ООО «ВАРК» участвовал в выставке «Газ. Нефть. Технологии» в 2024 г. Выставка проходит в ЭКСПО-центре',
  };
</script>

<style scoped lang="scss">
  .btn {
    margin-top: 60px;
    @apply tw-text-center;
  }
</style>
