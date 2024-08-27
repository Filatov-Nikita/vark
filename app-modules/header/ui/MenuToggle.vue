<template>
  <button class="toggle">
    <BaseIcon :name="showed ? 'close-menu' : 'burger'" fit />
  </button>
</template>

<script setup lang="ts">
  defineProps<{
    showed: boolean,
  }>();
</script>

<style scoped lang="scss">
  .toggle {
    width: 38px;
    height: 38px;

    @include sm {
      width: 24px;
      height: 24px;
    }
  }
</style>
