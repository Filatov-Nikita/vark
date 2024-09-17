<template>
  <div>
    <div class="address-row">
      <div class="address-row__label">Адрес</div>
      <NuxtLink class="address-row__body" :to="{ name: 'contacts', hash: '#map', query: { map_index: 0 } }">
        {{ address }}
      </NuxtLink>
    </div>
    <div class="address-row">
      <div class="address-row__label">Адрес производства</div>
      <NuxtLink class="address-row__body" :to="{ name: 'contacts', hash: '#map', query: { map_index: 1 } }">
        {{ manufactureAddress }}
      </NuxtLink>
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
      @apply tw-text-body-m-regular tw-block tw-w-full;

      &:hover {
        @apply tw-text-text-gray-hover;
      }

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
