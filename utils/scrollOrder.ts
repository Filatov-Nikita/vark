export default function() {
  const formEl = document.querySelector('.order-form');
  if(!formEl) return;
  formEl.scrollIntoView({ behavior: 'smooth' });
}
