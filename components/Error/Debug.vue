<template>
  <div class="page-pt page-pb">
    <div class="wrapper">
      <h1 class="h1 tw-mb-40">{{ error.statusCode }}</h1>
      <p class="tw-py-20 tw-text-h3-bold">{{ error.message }}</p>
      <div v-html="error.stack"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { NuxtError } from '#app';

  defineProps<{
    error: NuxtError,
  }>();
</script>
