import { ru } from 'yup-locales';
import { setLocale } from 'yup';

export default defineNuxtPlugin(() => {
  setLocale({
    ...ru,
    mixed: { required: '${path} - обязательное поле' },
  });
});
