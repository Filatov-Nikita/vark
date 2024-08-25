<template>
  <Swiper :initial-slide="activeSlide" :modules="[ SwiperEffectFlip ]" effect="flip" :simulate-touch="false" @swiper="swiper = $event">
    <SwiperSlide v-for="group in customers">
      <ul>
        <li
          class="item"
          v-for="customer in group"
        >
          <div class="left">
            <p class="name">{{ customer.name }}</p>
            <p v-if="customer.position" class="position">{{ customer.position }}</p>
          </div>
          <div class="right">
            <div class="phone">
              <a :href="`tel:${customer.phone}`">{{ customer.phone }}</a>
              <span class="phone-cap" v-if="customer.phoneCap">{{ customer.phoneCap }}</span>
            </div>
            <a v-if="customer.email" class="email" :href="`mmailto:${customer.email}`">{{ customer.email }}</a>
          </div>
        </li>
      </ul>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
  import customers from '../model/customers';

  const props = defineProps<{
    activeSlide: number,
  }>();

  const swiper = ref<any>(null);

  watch(() => props.activeSlide, (index) => {
    swiper.value.slideTo(index);
  });
</script>

<style scoped lang="scss">
  .item {
    padding: 24px 0;
    border-bottom: 1px solid #3E3E3E;
    display: flex;
    flex-wrap: wrap;
    column-gap: 30px;
    justify-content: space-between;
    @apply tw-text-body-m-regular;

    &:first-child {
      padding-top: 0;
    }
  }

  .left {
    max-width: 320px;
    width: 100%;
  }

  .right {
    max-width: 250px;
    word-break: break-all;
    text-align: right;
  }

  .position {
    @apply tw-text-text-gray tw-mt-12;
  }

  .phone {
    display: flex;
    gap: 5px;
  }

  .phone-cap {
    @apply tw-text-text-gray;
  }

  .email {
    display: block;
    width: 100%;
    @apply tw-text-text-gray tw-mt-12;
  }
</style>
