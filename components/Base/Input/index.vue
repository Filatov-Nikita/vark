<template>
  <div class="base-inp">
    <Field
      class="base-inp__field"
      :class="[`base-inp__field--${design}`, {
        'base-inp__field--error': !!errorMessage,
      }]"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :rules="rules"
      :data-maska="maska"
      v-maska
      @maska="onMaska"
    />
    <ErrorMessage
      class="base-inp__error"
      :name="name"
    />
  </div>
</template>

<script setup lang="ts">
  import type { RuleExpression } from 'vee-validate';
  import { vMaska } from 'maska/vue';

  export type IType = 'text' | 'email' | 'number' | 'tel' | 'password';
  export type IDesign = 'white' | 'gray';

  interface MaskaDetail {
    masked: string;
    unmasked: string;
    completed: boolean;
  }

  interface Props {
    name: string,
    type?: IType,
    placeholder?: string,
    rules?: RuleExpression<unknown>,
    design?: IDesign,
    maska?: string,
  }

  type Exposed = {
    maskaDetail: Ref<MaskaDetail>,
  };

  const props = withDefaults(defineProps<Props>(), {
    type: 'text',
    design: 'white',
    placeholder: '',
  });

  const errorMessage = useFieldError(props.name);

  const maskaDetail = ref<MaskaDetail>({
    masked: '',
    unmasked: '',
    completed: false,
  })

  function onMaska(event: CustomEvent<MaskaDetail>) {
    maskaDetail.value = event.detail;
  }

  defineExpose<Exposed>({ maskaDetail });
</script>

<style scoped lang="scss">
  .base-inp {
    &__field {
      display: block;
      width: 100%;
      border-radius: 5px;
      height: 59px;
      padding: 18px 25px;
      @apply tw-text-text-dark tw-border tw-border-solid tw-border-white tw-text-body-m-regular;

      &:hover {
        @apply tw-border-text-gray;
      }

      &:focus {
        @apply tw-border-text-gray-hover;
      }

      &::placeholder {
        @apply tw-text-text-gray;
      }

      &--error {
        @apply tw-border-primary;
      }

      &--white {
        @apply tw-bg-white;
      }

      &--gray {
        background-color: #EAEAEA;
      }
    }

    &__error {
      font-size: 14px;
      line-height: 16px;
      @apply tw-mt-4 tw-text-primary;
    }
  }
</style>
