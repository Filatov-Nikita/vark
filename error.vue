<template>
  <ErrorClient
    v-if="error.statusCode === 404 || isProd"
    :error="error"
  />
  <ErrorDebug
    v-else
    :error="error"
  />
</template>

<script setup lang="ts">
  import type { NuxtError } from '#app';

  defineProps<{
    error: NuxtError,
  }>();

  const isProd = import.meta.env.PROD;
</script>
