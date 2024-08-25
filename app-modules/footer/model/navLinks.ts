export const privacyHref = '#';

export default [
  {
    label: 'О компании',
    to: { name: 'about' },
  },
  {
    label: 'Продукция',
    to: { name: 'products-category-slug', params: { category: 'promyshlennaya-armatura', slug: 'zadvizhki-klinovyie-stalnyie'  } },
  },
  {
    label: 'Документация',
    to: { name: 'docs' },
  },
  {
    label: 'Новости',
    to: { name: 'posts' },
  },
  {
    label: 'Контакты',
    to: { name: 'contacts' },
  },
];
