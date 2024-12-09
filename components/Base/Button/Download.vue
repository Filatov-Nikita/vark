<template>
  <BaseButton class="show-catalog" design="outline-md" :href="href" target="_blank">
    <span>
      <slot></slot>
    </span>
    <span class="show-catalog__icon-wrap">
      <BaseIcon fit name="download" />
    </span>
  </BaseButton>
</template>

<script setup lang="ts">
  defineProps<{
    href: string,
  }>();
</script>

<style scoped lang="scss">
  .show-catalog {
    display: inline-flex;
    align-items: center;
    gap: 10px;

    &__icon-wrap {
      width: 13px;
      height: 13px;
    }
  }
</style>
