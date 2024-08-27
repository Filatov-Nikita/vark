<template>
  <Form class="form" :validationSchema="schema">
    <BaseInput class="form__inp" name="name" placeholder="Имя" />
    <BaseInput class="form__inp" name="email" type="email" placeholder="E-mail" />
    <PolicyAccept class="form__policy" />
    <BaseButton class="form__btn" type="submit">ОТПРАВИТЬ</BaseButton>
  </Form>
</template>

<script setup lang="ts">
  import validationSchema from '../model/schema';

  const schema = validationSchema();
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
