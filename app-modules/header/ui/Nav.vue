<template>
  <nav class="nav">
    <NuxtLink
      class="nav__link"
      v-for="link in navLinks"
      :to="link.to"
    >
      {{ link.label }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
  import navLinks from '../model/navLinks';
</script>

<style scoped lang="scss">
  .nav {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;

    &__link {
      &:hover {
        @apply tw-text-text-gray-hover;
      }
    }
  }
</style>
