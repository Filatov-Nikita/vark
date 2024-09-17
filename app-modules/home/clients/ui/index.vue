<template>
  <section ref="section" class="clients white-area">
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
              <p class="stat__value">
                <span v-if="ssr">>1</span>
                <NumberAnimation
                  v-else
                  ref="numbers1"
                  :from="1"
                  :to="tab.count"
                  :duration="1.7"
                  :format="theFormat1"
                  easing="easeOutQuad"
                  :autoplay="false"
                /> <span class="stat__index">ед.</span>
              </p>
              <p class="stat__label">Объемы поставок</p>
            </div>
            <div class="stat">
              <p class="stat__value">
                <span v-if="ssr">1</span>
                <NumberAnimation
                  v-else
                  ref="numbers2"
                  :from="1"
                  :to="tab.sum.val"
                  :duration="1.7"
                  :format="theFormat2"
                  easing="easeOutQuad"
                  :autoplay="false"
                /> <span>{{ tab.sum.after }}</span>
              </p>
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
  //@ts-ignore
  import NumberAnimation from 'vue-number-animation';

  const ssr = import.meta.server;

  const tabItems = computed(() => tabs.map(tab => tab.name));

  const activeTab = ref(0);

  const swiper = ref<any | null>(null);

  const numbers1 = ref<any[] | null>(null);
  const numbers2 = ref<any[] | null>(null);

  const section = ref<HTMLElement | null>(null);

  function onChange() {
    if(activeTab.value !== swiper.value.activeIndex) {
      activeTab.value = swiper.value.activeIndex;
      startCounter();
    }
  }

  function theFormat1(value: number) {
    return '>' + prettyAmount(value.toFixed(0));
  }

  function theFormat2(value: number) {
    return prettyAmount(value.toFixed(1));
  }

  watch(activeTab, (index) => {
    swiper.value.slideTo(index);
    startCounter();
  });

  function startCounter() {
    numbers1.value?.[activeTab.value].restart();
    numbers2.value?.[activeTab.value].restart();
  }

  useIntersect(
    section,
    () => {
      startCounter();
    }, () => {},
    { threshold: 0.5, once: true }
  );
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

      :deep(.tab-item) {
        &:hover {
          @apply tw-text-text-dark;
        }
      }
    }

    &__content {
      display: flex;
      flex-wrap: wrap;
      margin-left: -50px;
      margin-top: -30px;

      @include lg {
        margin-left: -30px;
      }

      @include md {
        margin-left: -16px;
      }

      @include sm {
        margin-top: -24px;
      }
    }
  }

  .stat {
    margin-left: 50px;
    margin-top: 30px;
    width: calc(50% - 50px);

    @include lg {
      margin-left: 30px;
      width: calc(50% - 30px);
    }

    @include md {
      margin-left: 16px;
      width: calc(100% - 16px);
    }

    @include sm {
      margin-top: 24px;
    }

    &:hover &__value {
      transform: scale(1.05);
    }

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
      transition: transform 150ms;
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

      @include xs {
        font-size: 48px;
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
