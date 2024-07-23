<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  useSeoMeta({
    titleTemplate: (titleChunk) => {
      return  titleChunk ? `Варк | ${titleChunk}` : 'Варк - производство трубопроводной арматуры';
    },
  })
</script>
