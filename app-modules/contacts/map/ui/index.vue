<template>
  <div class="map">
    <ul class="points">
      <li
        class="point-li"
        v-for="(point, index) in points"
      >
        <button
          class="point"
          :class="{ 'point--active': curInd === index }"
          @click="curInd = index"
        >
          <span class="icon">
            <BaseIcon name="geo" fit />
          </span>
          <span>{{ point.label }}</span>
        </button>
      </li>
    </ul>
    <yandex-map
        v-model="map"
        :settings="{
          location: {
            center: points[curInd].coords,
            zoom: 14,
            duration: 800,
          },
        }"
        width="100%"
        height="100%"
    >
      <yandex-map-default-scheme-layer/>
      <yandex-map-default-features-layer />
      <yandex-map-default-marker
        v-for="point in points"
        :settings="{ coordinates: point.coords }"
      ></yandex-map-default-marker>
      <yandex-map-controls :settings="{ position: 'right' }">
        <yandex-map-zoom-control/>
        <yandex-map-geolocation-control />
      </yandex-map-controls>
    </yandex-map>
  </div>
</template>

<script setup lang="ts">
  import type { YMap } from '@yandex/ymaps3-types';
  import {
    YandexMap,
    YandexMapDefaultSchemeLayer,
    YandexMapDefaultFeaturesLayer,
    YandexMapDefaultMarker,
    YandexMapControls,
    YandexMapZoomControl,
    YandexMapGeolocationControl,
  } from 'vue-yandex-maps';
  import points from '../model/points';

  const map = shallowRef<null | YMap>(null);

  const curInd = ref(0);
</script>

<style scoped lang="scss">
  .map {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    height: 500px;
  }

  .points {
    background: #2B2B2B;
    width: 200px;
    border-radius: 6px;
    position: absolute;
    z-index: 100;
    left: 14px;
    top: 14px;
    padding: 20px;
    @apply tw-text-text-gray;
  }

  .point-li {
    & + & {
      margin-top: 16px;
    }
  }

  .point {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .icon {
    width: 19px;
    height: 22px;
    @apply tw-text-text-gray;
  }

  .point--active .icon {
    @apply tw-text-primary;
  }

  .point--active {
    @apply tw-text-white tw-font-bold;
  }
</style>
