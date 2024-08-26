<template>
  <div class="tw-w-full tw-h-[500px]">
    <model-viewer
      class="tw-w-full tw-h-full model-viewer"
      src="/models/bloki-priedokhranitielnykh-klapanov/model.glb"
      poster="/models/bloki-priedokhranitielnykh-klapanov/poster.png"
      camera-controls
      auto-rotate
      ar
      ar-modes="webxr scene-viewer quick-look"
      tone-mapping="neutral"
      hadow-intensity="1"
      camera-orbit="auto auto 2m"
    ></model-viewer>
  </div>
</template>

<script setup lang="ts">

</script>

<style>
  .model-viewer {
    --progress-bar-color: #E40000;
  }
</style>
