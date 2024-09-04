<template>
  <div class="select">
    <div class="inp" @click="showed = !showed">
      <div class="label">{{ modelValue.name }}</div>
      <span class="icon" :class="{ 'icon--active': showed }">
        <BaseIcon name="next" fit />
      </span>
    </div>
    <Transition name="select">
      <div class="dropdown" v-if="showed">
        <ul>
          <li class="option" :class="{ 'option--active': option === modelValue }" v-for="option in opts">
            <NuxtLink
              :to="
                $route.name === 'products-category-slug'
                  ? { params: { category: option.category.slug, slug: option.slug } }
                  : { query: { productCategorySlug: option.category.slug, productSlug: option.slug } }
              "
              @click="onClick"
            >
              {{ option.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import type { ProductItem } from '@/stores/products';

  const props = defineProps<{
    modelValue: ProductItem,
    options: ProductItem[],
  }>();

  const showed = ref(false);

  const opts = computed(() => {
    return props.options.filter(p => p.category.slug !== 'specialnaya-armatura');
  });

  function onClick() {
    showed.value = false;
  }
</script>

<style scoped lang="scss">
  .select {
    position: relative;
  }

  .inp {
    padding: 10px 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    @apply tw-text-body-s-regular;

    &:hover {
      @apply tw-text-text-gray;
    }
  }

  .icon {
    width: 16px;
    height: 16px;
    transform: rotate(90deg);
    transition: transform 300ms;

    &--active {
      transform: rotate(-90deg);
    }
  }

  .dropdown {
    position: absolute;
    z-index: 100;
    top: calc(100% + 8px);
    left: 0;
    width: 100%;
    border-radius: 10px;
    max-height: 300px;
    overflow-x: hidden;
    @apply tw-bg-white tw-text-text-dark tw-font-medium tw-border tw-border-solid tw-border-text-gray tw-shadow-md;
  }

  .option {
    padding: 10px 16px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: #ececec;
    }

    &--active {
      pointer-events: none;
      @apply tw-text-text-gray;
    }
  }

  .select-enter-active {
    animation: fadeInDown;
    animation-duration: 300ms;
  }

  .select-leave-active {
    animation: fadeOutUp;
    animation-duration: 300ms;
  }
</style>
