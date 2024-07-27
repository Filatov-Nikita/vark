<template>
  <BaseInput
    :name="name"
    :design="design"
    type="tel"
    placeholder="+7 (999) 999-99-99"
    maska="+7 (###) ### ## ##"
  />
</template>

<script setup lang="ts">
  import type { RuleExpression } from 'vee-validate';
  import type { IDesign } from '@/components/Base/Input/index.vue';

  defineProps<{
    name: string,
    rules?: RuleExpression<unknown>,
    design?: IDesign,
  }>();
</script>
