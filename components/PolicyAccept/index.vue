<template>
  <p class="policy-accept" :class="[ `policy-accept--${design}`, `policy-accept--${size}` ]">Нажимая на кнопку, вы соглашаетесь с <a :href="privacyPolicyHref" target="_blank">Политикой конфиденциальности</a></p>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      size?: 'sm' | 'md',
      design?: 'light' | 'dark'
    }>(),
    { design: 'light', size: 'md' },
  );

  const { privacyPolicyHref } = storeToRefs(useContactsStore());
</script>

<style scoped lang="scss">
  .policy-accept {
    @apply tw-text-text-gray;

    &--md {
      font-size: 14px;
      line-height: 17px;
    }

    &--sm {
      font-size: 12px;
      line-height: 15px;
    }

    &--light {
      a {
        &:hover {
          @apply tw-text-white;
        }
      }
    }

    &--dark {
      a {
        &:hover {
          @apply tw-text-text-dark;
        }
      }
    }

    a {
      @apply tw-underline;
    }
  }
</style>
