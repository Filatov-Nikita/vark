<template>
  <div class="phone">
    <a class="phone__link" :href="`tel:${phone}`">{{ phone }}</a>
  </div>
</template>

<script setup lang="ts">
  const { phone } = storeToRefs(useContactsStore());
</script>

<style scoped lang="scss">
  .phone {
    &__link {
      font-weight: 800;

      &:hover {
        color: #979797;
      }
    }
  }
</style>
