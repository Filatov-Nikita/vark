<template>
  <section class="gallery white-area">
    <div class="wrapper">
      <h2 class="h2 h-mb-40"><span class="tw-text-primary">Производство</span> в&nbsp;деталях</h2>
      <div class="gallery__tabs">
        <TabBtn :active="tab === 'photo'" @click="tab = 'photo'">Фотографии</TabBtn>
        <TabBtn v-if="videoList.length > 0" :active="tab === 'video'" @click="tab = 'video'">Видео</TabBtn>
      </div>
      <KeepAlive>
        <ClientOnly>
          <SliderImages v-if="tab === 'photo'" :images="images" @update:index="onUpdateIndex" />
          <SliderVideos v-else :videos="videoList" @update:index="onUpdateIndex" />
        </ClientOnly>
      </KeepAlive>
      <div class="gallery__btn-wrap" @click="modal = true">
        <BaseButton class="gallery__btn">Посмотреть все</BaseButton>
      </div>
      <BaseModal v-model="modal">
        <BodyImages v-if="tab === 'photo'" :images="images" />
        <BodyVideos v-else :videos="videoList" />
      </BaseModal>
      <BaseModal :model-value="showedIndex !== null" @update:model-value="showedIndex = null" anim-dir="x" no-off-scroll>
        <BodyImagesSlider v-if="showedIndex !== null && tab === 'photo'" :initial-slide="showedIndex" :images="images" />
        <BodyVideosSlider v-else-if="showedIndex !== null && tab === 'video'" :initial-slide="showedIndex" :videos="videoList" />
      </BaseModal>
    </div>
  </section>
</template>

<script setup lang="ts">
  import TabBtn from './TabBtn.vue';
  import SliderImages from './SliderImages.vue';
  import SliderVideos from './SliderVideos.vue';
  import BodyImages from './BodyImages.vue';
  import BodyVideos from './BodyVideos.vue';
  import BodyImagesSlider from './BodyImagesSlider.vue';
  import BodyVideosSlider from './BodyVideosSlider.vue';
  import type { Tab } from '../model/types';
  import type { DataRes } from '@/types/shared/response';
  import type { Video as TVideo, Photo as TPhoto, Image as TImage } from '../model/types';

  const tab = ref<Tab>('photo');

  const modal = ref(false);

  const { data: photos } = await useFetch<DataRes<TPhoto[]>>('photos', { baseURL: useAppConfig().apiPrefix });
  const { data: videos } = await useFetch<DataRes<TVideo[]>>('videos', { baseURL: useAppConfig().apiPrefix });

  const images = computed(() => (photos.value?.data.filter(i => i.image !== null).map(i => i.image) ?? []) as TImage[]);
  const videoList = computed(() => (videos.value?.data ?? []));
  const showedIndex = ref<number | null>(null);

  function onUpdateIndex(ind: number) {
    showedIndex.value = ind;
  }

  watch(modal, (val) => {
    if(!val) {
      showedIndex.value = null;
    }
  });
</script>

<style scoped lang="scss">
  .gallery {
    padding-top: 70px;
    padding-bottom: 120px;

    @include sm {
      padding-top: 50px;
      padding-bottom: 60px;
    }

    &__btn-wrap {
      text-align: center;
      margin-top: 60px;

      @include sm {
        margin-top: 30px;
      }
    }

    &__btn {
      @include sm {
        width: 100%;
      }
    }

    &__tabs {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;

      @include sm {
        gap: 16px;
        margin-bottom: 24px;
      }
    }
  }
</style>
