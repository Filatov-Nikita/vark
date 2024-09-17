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

    @include sm {
      padding-top: 30px;
    }
  }

  .label {
    @apply tw-text-text-gray tw-mb-10;

    @include sm {
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 6px;
    }
  }

  .address {
    max-width: 391px;
    @apply tw-text-body-m-regular;

    @include sm {
      @apply tw-text-body-s-regular;
    }
  }

  .item {
    & + & {
      @apply tw-mt-30;

      @include sm {
        @apply tw-mt-24;
      }
    }
  }

  .items {
    max-width: 746px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 60px;
    row-gap: 24px;
    justify-content: space-between;
    margin-bottom: 100px;

    @include sm {
      margin-bottom: 70px;
    }
  }

  .link {
    @apply tw-text-body-m-extra-bold tw-text-white tw-inline-block;

    &:hover {
      opacity: 0.8;
    }

    @include sm {
      font-size: 16px;
      line-height: 20px;
    }
  }

  .phone-email {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
  }

  .dirs {
    max-width: 650px;
  }

  .gen-dir {
    display: flex;
    flex-wrap: wrap;
    column-gap: 60px;
    row-gap: 12px;
    justify-content: space-between;
    margin-bottom: 50px;

    @include sm {
      margin-bottom: 40px;
    }
  }

  .gen-dir-label {
    @apply tw-text-h3-bold;

    @include sm {
      font-size: 20px;
      line-height: 27px;
    }
  }

  .name {
    @apply tw-text-body-m-regular tw-mb-8;

    @include sm {
      @apply tw-text-body-s-regular;
    }
  }

  .email {
    @apply tw-text-text-gray tw-text-body-m-regular tw-inline-block;

    &:hover {
      opacity: 0.8;
    }

    @include sm {
      @apply tw-text-body-s-regular;
    }
  }

  .dir-li {
    & + & {
      margin-top: 20px;

      @include sm {
        margin-top: 14px;
      }
    }
  }

  .dir-tab {
    transition: transform 150ms;
    @apply tw-text-body-m-regular tw-text-text-gray tw-text-left;

    &:hover {
      transform: scale(1.05);
      @apply tw-text-white;
    }

    @include sm {
      @apply tw-text-body-s-regular;
    }

    &--active {
      @apply tw-font-semibold tw-text-white;
    }
  }

  .dir-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 24px;
  }

  .dir-value {
    max-width: 300px;
    width: 100%;
  }

  .dir-tabs {
    max-width: 275px;
  }
</style>
