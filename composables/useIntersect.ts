export default function(
  el: Ref<HTMLElement | null>,
  onEntry: (entry: IntersectionObserverEntry) => void,
  onLeave: (entry: IntersectionObserverEntry) => void,
  { threshold = 0, once = false }
) {
  if(import.meta.client) {
    const ob = new IntersectionObserver((payload) => {
      const entry = payload[0];
      if(entry.isIntersecting) {
        onEntry(entry);
        if(once) ob.unobserve(entry.target);
      } else {
        onLeave(entry);
      }
    }, { threshold });

    onMounted(() => {
      if(el.value) {
        ob.observe(el.value);
      }
    });
  }
}
