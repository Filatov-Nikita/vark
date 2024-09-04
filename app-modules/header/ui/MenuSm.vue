<template>
  <ClientOnly>
    <Teleport to="body">
      <Transition name="menu">
        <div class="menu-sm" v-if="showed">
          <div class="wrapper">
            <slot name="header"></slot>
            <nav class="nav-sm">
              <div
                class="nav-item"
                v-for="link in navLinks"
              >
                <NuxtLink
                  class="nav-link"
                  :to="link.to"
                  @click="$emit('close')"
                >
                  {{ link.label }}
                </NuxtLink>
              </div>
            </nav>
            <Phone />
          </div>
        </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
  import Phone from './Phone.vue';
  import navLinks from '../model/navLinks';

  defineProps<{
    showed?: boolean,
  }>();

  defineEmits<{
    (event: 'close'): void,
  }>();
</script>

<style scoped lang="scss">
  .menu-sm {
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 9000;
    left: 0;
    top: 0;
    padding-top: 30px;
    @apply tw-bg-bg-grafit;

    @include sm {
      padding-top: 16px;
    }
  }

  .menu-enter-active {
    animation: fadeIn;
    animation-duration: 300ms;
  }

  .menu-leave-active {
    animation: fadeOut;
    animation-duration: 300ms;
  }

  .nav-sm {
    padding-top: 30px;
    padding-bottom: 40px;
  }

  .nav-item {
    & + & {
      margin-top: 20px;
    }
  }
</style>
