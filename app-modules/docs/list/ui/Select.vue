<template>
  <div class="select">
    <div class="inp" @click="showed = !showed">
      <div class="label">{{ modelValue }}</div>
      <span class="icon" :class="{ 'icon--active': showed }">
        <BaseIcon name="next" fit />
      </span>
    </div>
    <Transition name="select">
      <div class="dropdown" v-if="showed">
        <ul>
          <li class="option" :class="{ 'option--active': option === modelValue }" v-for="option in options" @click="onChange(option)">
            {{ option }}
          </li>
        </ul>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    modelValue: string,
    options: string[],
  }>();

  const emit = defineEmits<{
    (event: 'update:modelValue', value: string): void,
  }>();

  const showed = ref(false);

  function onChange(option: string) {
    emit('update:modelValue', option);
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
