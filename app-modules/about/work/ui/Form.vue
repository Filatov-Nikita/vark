<template>
  <article class="form white-area">
    <h3 class="h3 tw-uppercase">Отклик</h3>
    <p class="subtitle">Заполните данные, прикрепите резюме и мы свяжемся с вами</p>
    <Form ref="formRef" :validation-schema="schema" @submit="onSubmit">
      <BaseInput class="inp" design="gray" name="name" placeholder="Имя" />
      <PhoneInput class="inp" design="gray" name="phone" />
      <BaseFileInput ref="file" class="file" name="file">Прикрепить резюме</BaseFileInput>
      <BaseButton class="btn" type="submit" :disabled="sending">Отправить</BaseButton>
      <PolicyAccept design="dark" size="sm" />
    </Form>
  </article>
</template>

<script setup lang="ts">
  import validationSchema, { type Form as TForm } from '../model/schema';
  import { Form } from 'vee-validate';
  import FileInput from '@/components/Base/FileInput/index.vue';

  withDefaults(
    defineProps<{
      sending: boolean,
    }>(),
    { sending: false },
  );

  const formRef = ref<InstanceType<typeof Form> | null>(null);
  const file = ref<InstanceType<typeof FileInput> | null>(null);

  const emit = defineEmits<{
    (event: 'submit', form: TForm): void,
  }>();

  const schema = validationSchema();

  function onSubmit(form: unknown) {
    emit('submit', form as TForm);
  }

  function reset() {
    file.value?.reset();
    formRef.value?.resetForm();
  }

  defineExpose({
    reset,
  });
</script>

<style scoped lang="scss">
  .form {
    border-radius: 20px;
    padding: 24px 50px;

    @include sm {
      padding: 16px 12px 24px;
    }
  }

  .subtitle {
    max-width: 365px;
    @apply tw-text-body-m-regular tw-mt-10 tw-mb-16;

    @include sm {
      max-width: 320px;
      @apply tw-text-body-s-regular tw-mt-8 tw-mb-20;
    }
  }

  .inp {
    & + & {
      margin-top: 8px;

      @include sm {
        margin-top: 12px;
      }
    }
  }

  .file {
    margin-top: 17px;
  }

  .btn {
    font-size: 16px;
    line-height: 1.25;
    margin-top: 14px;
    margin-bottom: 12px;

    @include sm {
      width: 100%;
    }
  }
</style>
