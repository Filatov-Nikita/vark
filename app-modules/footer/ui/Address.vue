<template>
  <div>
    <div class="address-row">
      <div class="address-row__label">Адрес</div>
      <div class="address-row__body">{{ address }}</div>
    </div>
    <div class="address-row">
      <div class="address-row__label">Адрес производства</div>
      <div class="address-row__body">{{ manufactureAddress }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const {
    address,
    manufactureAddress
  } = storeToRefs(useContactsStore());
</script>

<style scoped lang="scss">
  .address-row {
    &__label {
      margin-bottom: 5px;
      @apply tw-text-text-gray;

      @include sm {
        font-size: 14px;
      }
    }

    &__body {
      @apply tw-text-body-m-regular;

      @include sm {
        @apply tw-text-body-s-regular;
      }
    }

    & + & {
      @apply tw-mt-30;

      @include sm {
        @apply tw-mt-24;
      }
    }
  }
</style>
