<template>
  <div class="deps">
    <Tabs class="tabs" v-model:active-index="activeTab" />
    <div class="slider">
      <Slider :activeSlide="activeTab" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import Tabs from './Tabs.vue';
  import Slider from './Slider.vue';

  const activeTab = ref(0);
</script>

<style scoped lang="scss">
  .deps {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 40px;
    row-gap: 30px;
    padding-top: 37px;

    @include sm {
      padding-top: 30px;
    }
  }

  .slider {
    max-width: 605px;
    width: 100%;
  }

  .tabs {
    max-width: 430px;
    width: 100%;
  }
</style>
