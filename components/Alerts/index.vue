<template>
  <ClientOnly>
    <teleport to="body">
      <div class="base-alerts">
        <transition-group
          leave-active-class="animate__animated anim-300ms animate__fadeOutDown"
          enter-active-class="animate__animated anim-300ms animate__fadeInUp"
        >
            <div
              class="base-alerts__item" :class="`base-alerts__item--${item.type}`"
              v-for="item in items" :key="item.id"
            >
              <div>{{ item.message }}</div>
              <button class="base-alerts__close" @click="remove(item.id)">
                <BaseIcon name="close" fit />
              </button>
            </div>
          </transition-group>
        </div>
    </teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
  const alertsStore = useAlertsStore();

  const items = computed(() => {
    return alertsStore.items;
  });

  const timeouts: Record<number, unknown> = {};

  function remove(id: number) {
    if(timeouts[id]) {
      clearTimeout(id);
      delete timeouts[id];
    };
    alertsStore.remove(id);
  }

  watch(items, () => {
    items.value.filter(item => !timeouts[item.id]).forEach(item => {
      timeouts[item.id] = setTimeout(() => {
        remove(item.id);
      }, alertsStore.timeout);
    });
  }, { immediate: true, deep: true });
</script>

<style scoped lang="scss">
  .base-alerts {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 9999;
    width: 100%;
    padding: 16px;
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    pointer-events: none;

    &__item {
      pointer-events: all;
      width: 100%;
      max-width: 400px;
      padding: 16px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      gap: 16px;
      justify-content: space-between;
      @apply tw-leading-tight;

      & + & {
        margin-top: 20px;
      }

      &--warning {
        @apply tw-bg-warning tw-text-white;
      }

      &--error {
        @apply tw-bg-error tw-text-white;
      }

      &--success {
        @apply tw-bg-success tw-text-white;
      }
    }

    &__close {
      flex-shrink: 0;
      padding: 8px;
      width: 32px;
      height: 32px;
      @apply tw-text-white;

      &:hover {
        opacity: 0.7;
      }
    }
  }
</style>
