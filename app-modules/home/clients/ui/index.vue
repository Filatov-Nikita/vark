<template>
  <section class="clients white-area">
    <div class="wrapper">
      <h2 class="h2 h-mb-50">Наши заказчики</h2>
      <div class="tab-area">
        <BaseTabs
          class="clients__tabs"
          :items="tabItems"
          v-model:activeIndex="activeTab"
        />
      </div>
      <Swiper
        :spaceBetween="40"
        @swiper="swiper = $event"
        @slideChange="onChange"
      >
        <SwiperSlide v-for="(tab, index) in tabs">
          <div class="clients__content">
            <div class="stat">
              <p class="stat__value">{{ tab.count }} <span class="stat__index">ед.</span></p>
              <p class="stat__label">Объемы поставок</p>
            </div>
            <div class="stat">
              <p class="stat__value">{{ tab.sum }}</p>
              <p class="stat__label">Суммы поставок</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
  import tabs from '../model/tabs';

  const tabItems = computed(() => tabs.map(tab => tab.name));

  const activeTab = ref(0);

  const swiper = ref<any | null>(null);

  function onChange() {
    if(activeTab.value !== swiper.value.activeIndex) {
      activeTab.value = swiper.value.activeIndex;
    }

  }

  watch(activeTab, (index) => {
    swiper.value.slideTo(index);
  });
</script>

<style scoped lang="scss">
  .clients {
    padding-top: 100px;
    padding-bottom: 80px;
    @apply tw-bg-white;

    @include sm {
      padding-top: 45px;
      padding-bottom: 35px;
    }

    &__tabs {
      margin-bottom: 20px;

      @include sm {
        margin-bottom: 12px;
      }
    }

    &__content {
      display: flex;
      flex-wrap: wrap;
      gap: 150px;

      @include lg {
        gap: 70px;
      }

      @include sm {
        gap: 24px;
      }
    }
  }

  .stat {
    &__label {
      font-size: 24px;
      line-height: 1.25;
      @apply tw-mt-16;

      @include sm {
        font-size: 18px;
        margin-top: 14px;
      }
    }

    &__value {
      font-size: 92px;
      line-height: 1.25;
      font-weight: 800;
      letter-spacing: 0.01em;
      @apply  tw-text-primary;

      @include lg {
        font-size: 72px;
      }

      @include sm {
        font-size: 56px;
      }
    }

    &__index {
      font-size: 50px;

      @include lg {
        font-size: 36px;
      }

      @include sm {
        font-size: 32px;
      }
    }
  }

  .tab-area {
    overflow-y: hidden;
    margin-bottom: 40px;

    @include sm {
      margin-bottom: 12px;
    }
  }
</style>
