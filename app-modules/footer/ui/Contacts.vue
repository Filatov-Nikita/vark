<template>
  <div class="contacts">
    <div class="contacts__row">
      <a class="contacts__phone" :href="`tel:${phone}`">{{ phone }}</a>
    </div>
    <div class="contacts__row">
      <a class="contacts__email" :href="`mailto:${email}`">{{ email }}</a>
    </div>
    <div class="contacts__row">
      youtube
    </div>
  </div>
</template>

<script setup lang="ts">
  const {
    phone,
    email,
    youtubeHref,
  } = storeToRefs(useContactsStore());
</script>

<style scoped lang="scss">
  .contacts {
    &__row {
      & + & {
        @apply tw-mt-20;
      }
    }

    &__phone {
      @apply tw-text-body-m-extra-bold;

      &:hover {
        @apply tw-text-text-gray-hover;
      }
    }

    &__email {
      @apply tw-text-body-m-regular;

      &:hover {
        @apply tw-text-text-gray-hover;
      }
    }
  }
</style>
