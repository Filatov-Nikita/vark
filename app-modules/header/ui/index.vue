<template>
  <header class="header">
    <div class="header__wrap">
      <Logo class="header__logo" />
      <Nav class="header__nav" />
      <Phone class="header__phone" />
    </div>
  </header>
</template>

<script setup lang="ts">
  import Logo from './Logo.vue';
  import Nav from './Nav.vue';
  import Phone from './Phone.vue';
</script>

<style scoped lang="scss">
  .header {
    backdrop-filter: blur(50px);
    background: linear-gradient(134deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.14) 100%);
    border-radius: 20px;

    &__wrap {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      padding: 15px 30px;
      padding-right: 35px;
    }

    &__logo {
      width: 117px;
    }
  }
</style>
