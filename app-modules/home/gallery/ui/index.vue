<template>
  <section class="gallery white-area">
    <div class="wrapper">
      <h2 class="h2 h-mb-40"><span class="tw-text-primary">Производство</span> в деталях</h2>
      <div class="gallery__tabs">
        <TabBtn :active="tab === 'photo'" @click="tab = 'photo'">Фотографии</TabBtn>
        <TabBtn :active="tab === 'video'" @click="tab = 'video'">Видео</TabBtn>
      </div>
      <KeepAlive>
        <SliderImages v-if="tab === 'photo'" :images="[image, image]" />
        <SliderVideos v-else />
      </KeepAlive>
      <div class="gallery__btn" @click="modal = true">
        <BaseButton>Посмотреть все</BaseButton>
      </div>
      <Modal v-model="modal">
        <BodyImages v-if="tab === 'photo'" :images="[ image, image ]" />
      </Modal>
    </div>
  </section>
</template>

<script setup lang="ts">
  import TabBtn from './TabBtn.vue';
  import SliderImages from './SliderImages.vue';
  import SliderVideos from './SliderVideos.vue';
  import Modal from './Modal.vue';
  import BodyImages from './BodyImages.vue';
  import Image from './assets/1.jpg';
  import type { Tab } from '../model/types';

  const tab = ref<Tab>('photo');

  const image = {
    width: 1180,
    height: 784,
    path: Image,
  };

  const modal = ref(false);
</script>

<style scoped lang="scss">
  .gallery {
    padding-top: 70px;
    padding-bottom: 120px;

    &__btn {
      text-align: center;
      margin-top: 60px;
    }

    &__tabs {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
  }
</style>
