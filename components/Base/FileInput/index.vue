<template>
  <Field class="file-inp" ref="field" :name="name" as="div" v-slot="{ value, errorMessage, handleChange }">
    <div class="file-inp__wrap">
      <BaseIcon class="file-inp__icon" name="attach" />
      <span v-if="!value">
        <slot></slot>
      </span>
      <span v-else>{{ value.name }}</span>
    </div>
    <input class="file-inp__input" type="file" @change="handleChange" />
    <div v-if="errorMessage" class="file-inp__error">{{ errorMessage }}</div>
  </Field>
</template>

<script setup lang="ts">
  defineProps<{
    name: string,
  }>();

  const field = ref<any>(null);
</script>

<style scoped lang="scss">
  .file-inp {
    position: relative;

    &__wrap {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 10px 0;
      word-break: break-all;
    }

    &__icon {
      width: 24px;
      height: 24px;
      flex-shrink: 0;
    }

    &__input {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 10;
      opacity: 0;
      cursor: pointer;
    }

    &__error {
      font-size: 14px;
      line-height: 16px;
      @apply tw-text-primary tw-mt-4;
    }
  }
</style>
