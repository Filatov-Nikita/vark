<template>
  <Form ref="formRef" class="form" :validationSchema="schema" @submit="onSubmit">
    <BaseInput class="form__inp" name="name" placeholder="Имя" />
    <BaseInput class="form__inp" name="email" type="email" placeholder="E-mail" />
    <PolicyAccept class="form__policy" />
    <BaseButton class="form__btn" type="submit" :disabled="sending">Отправить</BaseButton>
  </Form>
</template>

<script setup lang="ts">
  import validationSchema from '../model/schema';
  import type { Form as TForm } from '../model/schema';
  import { Form } from 'vee-validate';

  withDefaults(
    defineProps<{
      sending: boolean,
    }>(),
    { sending: false },
  );

  const emit = defineEmits<{
    (event: 'submit', form: TForm): void,
  }>();

  const schema = validationSchema();

  const formRef = ref<InstanceType<typeof Form> | null>(null);

  function onSubmit(form: unknown) {
    emit('submit', form as TForm);
  }

  function reset() {
    formRef.value?.resetForm();
  }

  defineExpose({
    reset,
  });
</script>

<style scoped lang="scss">
  .form {
    &__inp {
      & + & {
        margin-top: 25px;

        @include sm {
          margin-top: 12px;
        }
      }
    }

    &__policy {
      margin-top: 20px;

      @include sm {
        margin-top: 14px;
      }
    }

    &__btn {
      margin-top: 30px;

      @include sm {
        width: 100%;
      }
    }
  }
</style>
