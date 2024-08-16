<template>
  <article class="item">
    <div class="head">
      <span class="icon-wrap">
        <BaseIcon :name="icon" fit />
      </span>
      <span class="name" v-html="name"></span>
    </div>
    <p class="range">
      <span class="label">от</span>
      <span class="value">&nbsp;{{ from }}&nbsp;</span>
      <span class="label">до</span>
      <span class="value">&nbsp;{{ to }}</span>
    </p>
  </article>
</template>

<script setup lang="ts">
  defineProps<{
    icon: string,
    name: string,
    from: string | number,
    to: string | number,
  }>();
</script>

<style scoped lang="scss">
  .head {
    display: flex;
    gap: 12px;
    margin-bottom: 14px;
  }

  .icon-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    padding: 11px;
    border: 1px solid #EAEAEA;
  }

  .name {
    padding-top: 2px;
    color: #8D8D8D;
    @apply tw-text-body-m-regular;
  }

  .range {
    color: #333333;
  }

  .label {
    @apply tw-text-body-m-regular;
  }

  .value {
    @apply tw-text-h2-extra-bold;
  }
</style>
