<template>
  <main class="page-error">
    <div class="wrapper">
      <div class="page-error__wrap">
        <div class="row1">
          <img class="break-img" width="764" height="284" src="./assets/break.svg" />
        </div>
        <div class="row2">
          <h1 class="h3 tw-uppercase">{{ message }}</h1>
          <BaseButton class="home" @click="handleError">На главную</BaseButton>
        </div>
        <div class="row3">
          <img class="decor-img" width="552" height="1176" src="./assets/enot.png" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  import type { NuxtError } from '#app';

  const props = defineProps<{
    error: NuxtError,
  }>();

  const handleError = () => clearError({ redirect: '/' });

  const message = computed<string>(() => {
    switch(props.error.statusCode) {
      case 404: return 'Страница не найдена!';
      default: return 'Произошла ошибка, попробуйте обновить страницу.';
    };
  });
</script>


<style scoped lang="scss">
  .page-error {
    height: 100vh;
    overflow: scroll;

    &__wrap {
      padding: 90px 0;
      min-height: 100vh;
      display: grid;
      justify-content: center;
      grid-template-columns: 700px 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 60px;
      column-gap: 60px;
      grid-template-areas:
        'row1 row3'
        'row2 row3'
      ;
    }
  }

  .row1 {
    grid-area: row1;
    align-self: self-end;
  }

  .row2 {
    grid-area: row2;
    text-align: center;
    align-self: self-start;
  }

  .row3 {
    align-self: center;
    grid-area: row3;
  }

  .home {
    margin-top: 30px;
  }

  .decor-img {
    max-width: 280px;
  }
</style>
