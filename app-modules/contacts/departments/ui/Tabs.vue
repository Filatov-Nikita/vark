<template>
  <ul>
    <li
      class="tab-li"
      v-for="(tab, index) in tabs"
    >
      <button class="tab" :class="{ 'tab--active': activeIndex === index }" @click="$emit('update:activeIndex', index)">
        {{ tab }}
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
  defineProps<{
    activeIndex: number,
  }>();

  defineEmits<{
    (event: 'update:activeIndex', index: number): void,
  }>();

  const tabs = [
    'Департамент по работе с ПАО «ГАЗПРОМ» и ПАО «НОВАТЭК» / Департамент проектных продаж',
    'Департамент по работе с НК «Роснефть»',
    'Департамент по работе с ПАО «Лукойл»',
    'Департамент по работе с ПАО «СИБУР Холдинг»',
  ];
</script>

<style scoped lang="scss">
  .tab-li {
    & + & {
      margin-top: 30px;
    }
  }

  .tab {
    @apply tw-text-text-gray tw-text-body-m-regular tw-text-left;

    &--active {
      @apply tw-text-white tw-font-bold;
    }
  }
</style>
