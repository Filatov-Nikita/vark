<template>
  <NuxtLink
    v-if="item.type === 'single'"
    class="item-link"
    :class="{ 'item-link--active': activeProductSlug === item.product.slug }"
    :to="{ params: { category: item.product.category.slug, slug: item.product.slug } }"
  >
    {{ item.product.name }}
  </NuxtLink>
  <div class="group" v-else>
    <button class="slide" @click="showedItems = !showedItems">
      <span class="slide__name">{{ item.productType.name }} </span>
      <span class="slide__icon" :class="{ 'slide__icon--active': showedItems }">
        <BaseIcon name="slide-down" fit />
      </span>
    </button>
    <SlideUpDown class="group__items" :active="showedItems" :duration="300">
      <NuxtLink
        v-for="child in item.products"
        :to="{ params: { category: child.category.slug, slug: child.slug } }"
        class="item-link item-link--child"
        :class="{ 'item-link--active': activeProductSlug === child.slug }"
      >
        {{ child.name }}
      </NuxtLink>
    </SlideUpDown>
  </div>
</template>

<script setup lang="ts">
  //@ts-ignore;
  import SlideUpDown from 'vue-slide-up-down';
  import type { GroupItem } from '../../model/useGroupItems';

  const props = defineProps<{
    item: GroupItem,
    activeProductSlug: string,
  }>();

  const hasActiveProduct = computed(() => {
    if(props.item.type === 'single') return false;
    return props.item.products.findIndex(pr => pr.slug === props.activeProductSlug) !== -1;
  });

  const showedItems = ref(hasActiveProduct.value);
</script>

<style scoped lang="scss">
  %item {
    padding: 14px 0px;
    @apply tw-text-text-gray tw-uppercase tw-text-body-m-regular;
  }

  .item-link {
    @extend %item;
    display: block;

    &--active {
      @apply tw-text-white tw-font-extrabold;
    }

    &--child {
      @apply tw-text-body-s-regular;
    }
  }

  .group {
    &__items {
      @apply tw-pl-20;
    }
  }

  .slide {
    display: flex;
    align-items: center;
    gap: 5px;

    &__name {
      @extend %item;
    }

    &__icon {
      width: 24px;
      height: 24px;
      transition: transform 300ms;
      @apply tw-text-text-gray;

      &--active {
        transform: rotate(-180deg);
      }
    }
  }
</style>
