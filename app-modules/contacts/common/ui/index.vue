<template>
  <div class="common">
    <div class="items">
      <div>
        <div class="item">
          <p class="label">Адрес</p>
          <p class="address">{{ address }}</p>
        </div>
        <div class="item">
          <p class="label">Адрес производства</p>
          <p class="address">{{ manufactureAddress }}</p>
        </div>
      </div>
      <div class="phone-email">
        <div>
          <p class="label">Телефон/факс</p>
          <a class="link" :href="`tel:${phone}`">{{ phone }}</a>
        </div>
        <div>
          <p class="label">E-mail</p>
          <a class="link" :href="`mailto:${email}`">{{ email }}</a>
        </div>
      </div>
    </div>
    <div class="dirs">
      <div class="gen-dir">
        <p class="gen-dir-label">{{ genDir.position }}</p>
        <div class="dir-value">
          <p class="name">{{ genDir.name }}</p>
          <a class="email" :href="`mailto:${genDir.email}`">{{ genDir.email }}</a>
        </div>
      </div>
      <div class="dir-list">
        <ul class="dir-tabs">
          <li
            class="dir-li"
            v-for="(dir, index) in dirs"
          >
            <button
              class="dir-tab"
              :class="{ 'dir-tab--active': dirTab === index }"
              @click="dirTab = index"
            >
              {{ dir.position }}
            </button>
          </li>
        </ul>
        <div class="dir-value">
          <p class="name">{{ curDir.name }}</p>
          <a class="email" :href="`mailto:${curDir.email}`">{{ curDir.email }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import dirs, { genDir } from '../model/dirrectors';

  const { address, manufactureAddress, phone, email } = storeToRefs(useContactsStore());

  const dirTab = ref(0);

  const curDir = computed(() => dirs[dirTab.value]);
</script>

<style scoped lang="scss">
  .common {
    padding-top: 50px;
  }

  .label {
    @apply tw-text-text-gray tw-mb-10;
  }

  .address {
    max-width: 391px;
    @apply tw-text-body-m-regular;
  }

  .item {
    & + & {
      @apply tw-mt-30;
    }
  }

  .items {
    max-width: 746px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 60px;
    justify-content: space-between;
    margin-bottom: 100px;
  }

  .link {
    @apply tw-text-body-m-extra-bold tw-text-white tw-inline-block;
  }

  .phone-email {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .dirs {
    max-width: 650px;
  }

  .gen-dir {
    display: flex;
    flex-wrap: wrap;
    column-gap: 60px;
    justify-content: space-between;
    margin-bottom: 50px;
  }

  .gen-dir-label {
    @apply tw-text-h3-bold;
  }

  .name {
    @apply tw-text-body-m-regular tw-mb-8;
  }

  .email {
    @apply tw-text-text-gray tw-text-body-m-regular tw-inline-block;
  }

  .dir-li {
    & + & {
      margin-top: 20px;
    }
  }

  .dir-tab {
    @apply tw-text-body-m-regular tw-text-text-gray tw-text-left;

    &--active {
      @apply tw-font-semibold tw-text-white;
    }
  }

  .dir-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .dir-value {
    max-width: 300px;
    width: 100%;
  }

  .dir-tabs {
    max-width: 275px;
  }
</style>
