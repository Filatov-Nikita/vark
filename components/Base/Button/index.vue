<template>
  <component class="base-btn" :class="classes" :is="is.tag" v-bind="is.attrs">
    <slot />
  </component>
</template>

<script setup lang="ts">
  import type { RouteLocationRaw } from 'vue-router';

  type BType = 'submit' | 'button';

  type BDesign = 'red-white-xl' | 'dark-md' | 'outline-md' | 'red-xl';

  interface Props {
    design?: BDesign,
    type?: BType,
    to?: RouteLocationRaw,
    href?: string,
    disabled?: boolean,
    iconRight?: string,
  };

  const props = withDefaults(defineProps<Props>(), {
    type: 'button',
    disabled: false,
    design: 'red-xl',
  });

  const classes = computed(() => {
    return [
      `base-btn--${props.design}`,
    ]
  });

  const NuxtLink = resolveComponent('NuxtLink');

  const is = computed(() => {
    return props.href ?
      {
        type: 'native',
        tag: 'a',
        attrs: getNativeAttrs(),
      } as const : props.to ?
      {
        type: 'nuxtlink',
        tag: NuxtLink,
        attrs: getNuxtLinkAttrs(),
      } as const :
      {
        type: 'button',
        tag: 'button',
        attrs: getButtonAttrs(),
      } as const;
  });

  function getNativeAttrs() {
    return {
      href: props.href,
    }
  }

  function getNuxtLinkAttrs() {
    return {
      to: props.to,
    }
  }

  function getButtonAttrs() {
    return {
      type: props.type,
      disabled: props.disabled,
    };
  }
</script>

<style scoped lang="scss">
  %size-xl {
    text-transform: uppercase;
    font-size: 20px;
    line-height: 25px;
    font-weight: 700;
  }

  %size-md {
    padding: 15px 30px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
  }

  .base-btn {
    border-radius: 20px;

    &:disabled {
      opacity: 0.6 !important;
      pointer-events: none;
    }

    &--red-white-xl {
      @extend %size-xl;
      padding: 16px 30px;
      @apply tw-text-white tw-bg-primary;

      &:hover {
        @apply tw-text-primary tw-bg-white;
      }
    }

    &--red-xl {
      @extend %size-xl;
      padding: 16px 40px;
      @apply tw-text-white tw-bg-primary;

      &:hover {
        @apply tw-bg-primary-hover;
      }
    }

    &--dark-md {
      @extend %size-md;
      color: #EDEDED;
      background-color: #333333;

      &:hover {
        @apply tw-bg-white tw-text-text-dark;
      }
    }

    &--outline-md {
      @extend %size-md;
      border: 1px solid #A4A4A4;

      &:hover {
        background-color: #333333;
      }
    }
  }
</style>
