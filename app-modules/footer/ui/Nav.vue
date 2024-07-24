<template>
  <nav class="nav">
    <div
      class="nav__row"
      v-for="link in navLinks"
    >
      <NuxtLink
        class="nav__link"
        :to="link.to"
      >
        {{ link.label }}
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import navLinks from '../model/navLinks';
</script>

<style scoped lang="scss">
  .nav {
    &__row {
      & + & {
        @apply tw-mt-16;
      }
    }

    &__link {
      @apply tw-text-body-m-regular;

      &:hover {
        @apply tw-text-text-gray-hover;
      }
    }
  }
</style>
