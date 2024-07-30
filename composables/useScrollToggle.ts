export default function(value: Ref<boolean>, disabled?: Ref<boolean>) {
  watch(value, () => {
    if(import.meta.server || (disabled && disabled.value)) return;

    if(value.value) {
      document.body.classList.add('tw-overflow-hidden');
    } else {
      document.body.classList.remove('tw-overflow-hidden');
    }
  }, { immediate: true });
}
