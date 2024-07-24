<template>
  <NuxtLink class="logo" :to="{ name: 'index' }">
    <img class="logo__img" width="117" height="31" src="./assets/logo.svg" alt="Варк - логотип">
  </NuxtLink>
</template>

<style scoped lang="scss">
  .logo {
    display: block;

    &__img {
      width: 100%;
    }
  }
</style>
