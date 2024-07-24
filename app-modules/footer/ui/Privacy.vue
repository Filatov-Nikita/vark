<template>
  <div class="privacy">
    <a class="privacy__link" :href="privacyHref" target="_blank">
      Политика конфиденциальности
    </a>
    <div class="partner">
      <span>Сайт</span>
      <img class="partner__logo" width="220" height="86" src="./assets/logo-invisa.png" alt="лого инвиза">
    </div>
  </div>
</template>

<script setup lang="ts">
  import { privacyHref } from '../model/navLinks';
</script>

<style scoped lang="scss">
  .privacy {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    &__link {
      @apply tw-text-text-gray;

      &:hover {
        @apply tw-text-white tw-underline;
      }
    }
  }

  .partner {
    display: flex;
    align-items: center;
    gap: 14px;
    @apply tw-text-text-gray;

    &__logo {
      width: 110px;

      img {
        width: 100%;
      }
    }
  }
</style>
