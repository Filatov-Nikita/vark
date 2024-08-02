<template>
  <section class="politics gray-area">
    <div class="wrapper">
      <h2 class="h2"><span class="tw-text-primary">Политика</span> компании</h2>
      <p class="subtitle">{{ subtitle }}</p>
      <Content />
    </div>
  </section>
</template>

<script setup lang="ts">
  import Content from './Content.vue';

  const subtitle = 'в области качества, экологии, охраны здоровья и безопасности труда';
</script>

<style scoped lang="scss">
  .politics {
    padding-top: 90px;
    padding-bottom: 70px;
  }

  .subtitle {
    @apply tw-text-h3-bold tw-mt-10 tw-mb-40;
  }
</style>
