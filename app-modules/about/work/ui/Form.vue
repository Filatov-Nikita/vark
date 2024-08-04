<template>
  <article class="form white-area">
    <h3 class="h3 tw-uppercase">Отклик</h3>
    <p class="subtitle">Заполните данные, прикрепите резюме и мы свяжемся с вами</p>
    <Form :validation-schema="schema">
      <BaseInput class="inp" design="gray" name="name" placeholder="Имя" />
      <PhoneInput class="inp" design="gray" name="phone" />
      <BaseFileInput class="file" name="file">Прикрепить резюме</BaseFileInput>
      <BaseButton class="btn" type="submit">Отправить</BaseButton>
      <PolicyAccept design="dark" size="sm" />
    </Form>
  </article>
</template>

<script setup lang="ts">
  import validationSchema from '../model/schema';

  const schema = validationSchema();
</script>

<style scoped lang="scss">
  .form {
    border-radius: 20px;
    padding: 24px 50px;
  }

  .subtitle {
    max-width: 365px;
    @apply tw-text-body-m-regular tw-mt-10 tw-mb-16;
  }

  .inp {
    & + & {
      margin-top: 8px;
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
  }
</style>
