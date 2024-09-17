<template>
  <article class="item" role="button" @click="showedModal = true">
    <div class="img-wrap">
      <img class="photo" :width="item.preview.width" :height="item.preview.height" :src="item.preview.url" />
    </div>
    <h2 class="name">{{ item.name }}</h2>
    <BaseModal class="img-modal" v-model="showedModal">
      <div class="big-img-wrap">
        <img class="big-img" :width="item.preview.width" :height="item.preview.height" :src="item.preview.url" />
      </div>
    </BaseModal>
  </article>
</template>

<script setup lang="ts">
  import type { DocItem as TItem } from '@/stores/products/docs';

  defineProps<{
    item: TItem,
  }>();

  const showedModal = ref(false);
</script>

<style scoped lang="scss">
  .item {
    margin: 20px 13px;
    width: calc(25% - 26px);

    &:hover .name {
      opacity: 0.8;
    }

    &:hover .photo {
      transform: scale(1.02);
    }

    @include lg {
      width: calc(33.3% - 26px);
    }

    @include md {
      width: calc(50% - 26px);
    }

    @include sm {
      margin: 12px 8px;
      width: calc(100% - 16px);
    }
  }

  .name {
    @apply tw-text-body-s-regular tw-mt-10;

    @include sm {
      font-size: 14px;
      line-height: 20px;
      margin-top: 6px;
    }
  }

  .img-wrap {
    border-radius: 10px;
    padding: 7px;
    border: 1px solid #EAEAEA;
    @apply tw-bg-white;

  }

  .photo {
    transition: transform 150ms;
    width: 100%;
  }

  .big-img-wrap {
    max-width: 500px;
    margin: 0 auto;
    height: calc(100vh - 100px);
  }

  .big-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }

  :global(.modal.img-modal) {
    padding: 30px;
  }

  :global(.img-modal .modal__body) {
    max-height: calc(100vh - 100px);
  }
</style>
