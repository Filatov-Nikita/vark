<template>
  <main class="main tw-p-16 tw-pb-96">
    <div class="tw-flex tw-flex-wrap -tw-m-16">
      <div class="tw-w-1/3 lg:tw-w-1/6 md:tw-w-1/4 tw-p-16 tw-text-center tw-text-primary" v-for="icon in icons">
        <BaseIcon class="tw-w-40 tw-h-40 tw-mx-auto" :name="icon" colorHex="#fff" />
        <div class="tw-mt-8 tw-text-body-s-regular">{{ icon }}</div>
        <button
          class="tw-text-primary tw-bg-white tw-rounded tw-p-4 tw-text-body-s-regular tw-mt-8"
          @click="copy(icon)"
        >
          copy
        </button>
      </div>
    </div>
    <div v-show="success" class="alert tw-bg-primary tw-rounded tw-text-white tw-fixed tw-inset-x-0 tw-bottom-0 tw-p-8">
      Скопировано успешно
    </div>
  </main>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: false
  });

  const icons = ref<string[]>([]);
  const success = ref(false);
  let timeout: any;

  onMounted(() => {
    const sprite = document.querySelector('#__svg__icons__dom__');
    if(!sprite) {
      alert('спрайт не найден в документе');
      return;
    }

    icons.value = Array.from(sprite.children).map(
      child => child.id.replace('icon-', '')
    );
  });

  function copy(icon: string) {
    navigator.clipboard.writeText(icon);
    success.value = true;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      success.value = false;
    }, 2000);
  }
</script>

<style>
  .main {
    width: 100%;
    min-height: 100vh;
    background: #000;
  }
</style>
