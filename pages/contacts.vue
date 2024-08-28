<template>
  <div class="page-pt page-pb">
    <div class="wrapper">
      <h1 class="h1 h-mb-50">Контакты</h1>
      <BaseTabs class="con-tabs" :items="[ 'Общие', 'Департаменты' ]" v-model:active-index="tab" />
      <Transition name="a-tabs">
        <Common v-if="tab === 0" />
        <Departments v-else />
      </Transition>
      <Map class="ya-map" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import Common from '@/app-modules/contacts/common/ui/index.vue';
  import Departments from '@/app-modules/contacts/departments/ui/index.vue';
  import Map from '@/app-modules/contacts/map/ui/index.vue';

  const tab = ref<number>(0);
</script>

<style scoped lang="scss">
  .con-tabs {
    max-width: 375px;
    border-bottom-width: 1px;
    border-color: #5D5D5D;

    @include sm {
      max-width: 300px;
    }

    :deep(.tab-item) {
      padding-bottom: 16px;
      font-weight: 400;
      color: #5D5D5D;
    }

    :deep(.tab-item--active) {
      font-weight: 700;
      @apply tw-text-white;
    }

    :deep(.tab-item--active::after) {
      bottom: -1px;
      height: 1px;
      @apply tw-bg-white;
    }
  }

  .a-tabs {
    &-enter-active {
      animation: fadeInRight;
      animation-duration: 600ms;
    }
  }

  .ya-map {
    margin-top: 100px;

    @include sm {
      margin-top: 70px;
    }
  }
</style>
