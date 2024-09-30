<template>
  <div class="wrap">
    <div class="images">
      <button
        class="image"
        v-for="(video, ind) in videos"
        @click="showedIndex = ind"
      >
        <img class="image__img" :width="video.preview.width" :height="video.preview.height" :src="video.preview.url" loading="lazy" />
      </button>
    </div>
    <BaseModal :model-value="showedIndex !== null" @update:model-value="showedIndex = null" anim-dir="x" no-off-scroll>
      <BodyVideosSlider v-if="showedIndex !== null" :initial-slide="showedIndex" :videos="videos" />
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
  import type { Video } from '../model/types';
  import BodyVideosSlider from './BodyVideosSlider.vue';

  defineProps<{
    videos: Video[],
  }>();

  const showedIndex = ref<number | null>(null);
</script>

<style scoped lang="scss">
  .wrap {
    padding: 10px;
    padding-top: 32px;

    @include sm {
      padding: 0px;
      padding-top: 24px;
    }
  }

  .images {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;

    @include sm {
      margin: -3px;
    }
  }

  .image {
    width: calc(25% - 20px);
    margin: 10px;
    border-radius: 20px;
    overflow: hidden;

    @include lg {
      width: calc(100% / 12 * 4 - 20px);
    }

    @include md {
      width: calc(50% - 20px);
    }

    @include sm {
      margin: 3px;
      width: calc(50% - 6px);
    }

    @include xs {
      width: calc(100% - 6px);
    }

    &__img {
      height: 192px;
      width: 100%;
      object-fit: cover;

      @include sm {
        height: 150px;
      }
    }
  }
</style>
