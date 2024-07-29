<template>
  <Form class="form" :validationSchema="schema">
    <BaseInput class="form__inp" name="name" placeholder="Имя" />
    <BaseInput class="form__inp" name="email" type="email" placeholder="E-mail" />
    <p class="form__policy">Нажимая на кнопку, вы соглашаетесь с <a :href="privacyPolicyHref" target="_blank">Политикой конфиденциальности</a></p>
    <BaseButton class="form__btn" type="submit">ОТПРАВИТЬ</BaseButton>
  </Form>
</template>

<script setup lang="ts">
  import validationSchema from '../model/schema';

  const schema = validationSchema();

  const { privacyPolicyHref } = storeToRefs(useContactsStore());
</script>

<style scoped lang="scss">
  .form {
    &__inp {
      & + & {
        margin-top: 25px;
      }
    }

    &__policy {
      margin-top: 20px;
      font-size: 14px;
      line-height: 17px;
      @apply tw-text-text-gray;

      a {
        @apply tw-underline;

        &:hover {
          @apply tw-text-white;
        }
      }
    }

    &__btn {
      margin-top: 30px;
    }
  }
</style>
