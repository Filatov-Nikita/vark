<template>
  <button class="nav-btn" :class="{ 'nav-btn--left': position === 'left' }">
    <svg class="nav-btn__icon" viewBox="0 0 13 22" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_334_3140)">
        <path d="M2.92286 0.483269C2.31364 -0.16109 1.32589 -0.16109 0.716675 0.483269C0.107462 1.12763 0.107462 2.17236 0.716675 2.81673L2.92286 0.483269ZM10.6598 11L11.7628 12.1668C12.3721 11.5224 12.3721 10.4776 11.7628 9.8333L10.6598 11ZM0.716675 19.1834C0.107462 19.8278 0.107462 20.8724 0.716675 21.5167C1.32589 22.1611 2.31364 22.1611 2.92286 21.5167L0.716675 19.1834ZM0.716675 2.81673L9.55676 12.1668L11.7628 9.8333L2.92286 0.483269L0.716675 2.81673ZM9.55676 9.8333L0.716675 19.1834L2.92286 21.5167L11.7628 12.1668L9.55676 9.8333Z" />
      </g>
      <defs>
        <clipPath id="clip0_334_3140">
          <rect width="13" height="22" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  </button>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      position: 'left' | 'right',
    }>(),
    { position: 'left' },
  );
</script>

<style scoped lang="scss">
  .nav-btn {
    padding: 12px;

    &--left {
      transform: rotate(-180deg);
    }

    &__icon {
      width: 13px;
      height: 22px;
      fill: #E0E0E0;
    }

    &:hover &__icon {
      fill: #333333;
    }
  }
</style>
