<template>
  <section class="order-form">
    <div class="wrapper">
      <div class="order-form__wrap">
        <div class="order-form__logo">
          <img width="393" height="403" src="./assets/logo.svg" alt="логотип Варк" loading="lazy">
        </div>
        <div class="order-form__form">
          <h2 class="h2">Заказать <span class="tw-text-primary">продукцию</span></h2>
          <p class="order-form__subtitle">Отправьте заявку и мы вышлем на ваш e-mail опросный лист. Заполните его для заказа</p>
          <Form />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import Form from './Form.vue';
</script>

<style scoped lang="scss">
  .order-form {
    padding-top: 120px;
    padding-bottom: 130px;

    @include lg {
      padding-top: 80px;
      padding-bottom: 90px;
    }

    @include sm {
      padding-top: 50px;
      padding-bottom: 35px;
    }

    &__subtitle {
      margin-top: 20px;
      margin-bottom: 30px;
      font-size: 22px;
      line-height: 1.2;

      @include sm {
        font-size: 16px;
        margin-bottom: 20px;
      }
    }

    &__wrap {
      max-width: 1130px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      column-gap: 80px;

      @include lg {
        column-gap: 40px;
      }

      @include md {
        row-gap: 40px;
      }

      @include sm {
        justify-content: center;
      }
    }

    &__logo {
      flex-basis: 392px;

      @include lg {
        flex-basis: 300px;
      }

      @include sm {
        flex-basis: 210px;
      }

      img {
        width: 100%;
      }
    }

    &__form {
      flex-basis: 545px;
    }
  }
</style>
