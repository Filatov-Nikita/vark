<template>
  <div class="contacts">
    <div class="contacts__row">
      <a class="contacts__phone" :href="`tel:${phone}`">{{ phone }}</a>
    </div>
    <div class="contacts__row">
      <a class="contacts__email" :href="`mailto:${email}`">{{ email }}</a>
    </div>
    <div class="contacts__row">
      <a class="soc-item soc-item--red" :href="youtubeHref" target="_blank">
        <BaseIcon name="youtube" fit />
      </a>
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

      @include sm {
        font-size: 16px;
        line-height: 1.4;
      }

      &:hover {
        @apply tw-text-text-gray-hover;
      }
    }

    &__email {
      @apply tw-text-body-m-regular;

      @include sm {
        @apply tw-text-body-s-regular;
      }

      &:hover {
        @apply tw-text-text-gray-hover;
      }
    }
  }

  .soc-item {
    display: block;
    border-radius: 8px;
    padding: 8px;
    width: 32px;
    height: 32px;
    @apply tw-bg-white tw-text-text-dark;

    &--red {
      &:hover {
        color: #FF0000;
      }
    }
  }
</style>
