<template>
  <div class="l-def">
    <div class="l-def__header">
      <div class="wrapper">
        <Header v-model:showedMenu="showedMenuSm" />
        <MenuSm :showed="showedMenuSm" @close="showedMenuSm = false">
          <template #header>
            <Header v-model:showedMenu="showedMenuSm" />
          </template>
        </MenuSm>
      </div>
    </div>
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
  import Header from '@/app-modules/header/ui/index.vue';
  import Footer from '@/app-modules/footer/ui/index.vue';
  import MenuSm from '@/app-modules/header/ui/MenuSm.vue';

  const showedMenuSm = ref(false);
</script>

<style scoped lang="scss">
  .l-def {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;

    &__header {
      @apply tw-pt-30;
    }
  }
</style>
