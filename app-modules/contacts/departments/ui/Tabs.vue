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
    'Департамент по работе с ПАО «ГАЗПРОМ» и ПАО «НОВАТЭК»',
    'Департамент по работе с НК «Роснефть»',
    'Департамент по работе с ПАО «Лукойл»',
    'Департамент по работе с ПАО «СИБУР»',
    'Департамент по работе с ключевыми клиентами',
    'Департамент продаж нефтегазового оборудования',
    'Отдел тендерных продаж',
  ];
</script>

<style scoped lang="scss">
  .tab-li {
    & + & {
      margin-top: 30px;

      @include sm {
        margin-top: 12px;
      }
    }
  }

  .tab {
    @apply tw-text-text-gray tw-text-body-m-regular tw-text-left;

    @include sm {
      font-size: 14px;
      line-height: 17px;
    }

    &--active {
      @apply tw-text-white tw-font-bold;
    }
  }
</style>
