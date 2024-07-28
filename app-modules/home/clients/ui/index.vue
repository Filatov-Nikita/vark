<template>
  <section class="clients white-area">
    <div class="wrapper">
      <h2 class="h2 h-mb-50">Наши заказчики</h2>
      <BaseTabs
        class="clients__tabs"
        :items="tabItems"
        v-model:activeIndex="activeTab"
      />
      <template v-for="(tab, index) in tabs">
        <div
          class="clients__content"
          v-show="index === activeTab"
        >
          <div class="stat">
            <p class="stat__value">{{ tab.count }} <span class="stat__index">ед.</span></p>
            <p class="stat__label">Объемы поставок</p>
          </div>
          <div class="stat">
            <p class="stat__value">{{ tab.sum }}</p>
            <p class="stat__label">Суммы поставок</p>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
  import tabs from '../model/tabs';

  const tabItems = computed(() => tabs.map(tab => tab.name));

  const activeTab = ref(0);
</script>

<style scoped lang="scss">
  .clients {
    padding-top: 100px;
    padding-bottom: 80px;
    @apply tw-bg-white;

    &__tabs {
      margin-bottom: 60px;
    }

    &__content {
      display: flex;
      flex-wrap: wrap;
      gap: 150px;
    }
  }

  .stat {
    &__label {
      font-size: 24px;
      line-height: 1.25;
      @apply tw-mt-16;
    }

    &__value {
      font-size: 92px;
      line-height: 1.25;
      font-weight: 800;
      letter-spacing: 1%;
      @apply  tw-text-primary;

    }

    &__index {
      font-size: 50px;
    }
  }
</style>
