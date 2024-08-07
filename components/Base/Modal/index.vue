<template>
  <ClientOnly>
    <Teleport to="body">
      <Transition :name="`modal-${animDir}`">
        <div class="modal" v-bind="$attrs" v-if="modelValue">
          <div class="modal__header">
            <button class="close" @click="close">
              <BaseIcon name="close" fit />
            </button>
          </div>
          <div class="modal__body">
            <slot></slot>
          </div>
          <div class="overlay" @click="close"></div>
        </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
  type AnimDir = 'x' | 'y';

  defineOptions({
    inheritAttrs: false,
  });

  const props = withDefaults(defineProps<{
    modelValue: boolean,
    noOffScroll?: boolean,
    animDir?: AnimDir,
  }>(), { noOffScroll: false, animDir: 'y' });

  const emit = defineEmits<{
    (event: 'update:modelValue', value: boolean): void,
  }>();

  useScrollToggle(toRef(props, 'modelValue'), toRef(props, 'noOffScroll'));

  function close() {
    emit('update:modelValue', false)
  }
</script>

<style scoped lang="scss">
  .modal {
    position: fixed;
    z-index: 9000;
    width: 100vw;
    height: 100vh;
    padding: 120px;
    left: 0;
    top: 0;
    padding-top: 80px;

    &-y-enter-active {
      animation: fadeInDown;
      animation-duration: 300ms;
    }

    &-y-leave-active {
      animation: fadeOutUp;
      animation-duration: 300ms;
    }

    &-x-enter-active {
      animation: fadeInLeft;
      animation-duration: 300ms;
    }

    &-x-leave-active {
      animation: fadeOutLeft;
      animation-duration: 300ms;
    }

    &__header {
      text-align: right;
    }

    &__body {
      max-height: calc(100vh - 240px);
      overflow-x: hidden;
    }
  }

  .overlay {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background:rgba(57, 57, 57, 0.9);
  }

  .close {
    width: 40px;
    height: 40px;
    padding: 8px;
  }
</style>
