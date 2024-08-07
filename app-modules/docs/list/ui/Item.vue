<template>
  <article class="item" role="button" @click="showedModal = true">
    <div class="img-wrap">
      <img :width="item.image.width" :height="item.image.height" :src="item.image.path" />
    </div>
    <h2 class="name">{{ item.name }}</h2>
    <BaseModal class="img-modal" v-model="showedModal">
      <div class="big-img-wrap">
        <img class="big-img" :width="item.image.width" :height="item.image.height" :src="item.image.path" />
      </div>
    </BaseModal>
  </article>
</template>

<script setup lang="ts">
  import type { Item as TItem } from '../model/docs';

  defineProps<{
    item: TItem,
  }>();

  const showedModal = ref(false);
</script>

<style scoped lang="scss">
  .item {
    margin: 20px 13px;
    width: calc(25% - 26px);
  }

  .name {
    @apply tw-text-body-s-regular tw-text-white tw-mt-10;
  }

  .img-wrap {
    border-radius: 10px;
    padding: 7px;
    border: 1px solid #EAEAEA;
    @apply tw-bg-white;

    img {
      width: 100%;
    }
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
