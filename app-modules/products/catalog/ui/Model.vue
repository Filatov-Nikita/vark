<template>
  <div class="tw-w-full tw-h-[500px]">
    <model-viewer
      class="tw-w-full tw-h-full model-viewer"
      :src="model.url"
      :poster="model.poster.url"
      camera-controls
      auto-rotate
      ar
      ar-modes="webxr scene-viewer quick-look"
      tone-mapping="neutral"
      hadow-intensity="1"
    ></model-viewer>
      <!-- camera-orbit="auto auto 2m" -->
  </div>
</template>

<script setup lang="ts">
  import type { ModelItem } from '@/stores/products/models';

  defineProps<{
    model: ModelItem,
  }>();
</script>

<style>
  .model-viewer {
    --progress-bar-color: #E40000;
  }
</style>
