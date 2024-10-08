/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: [
    "./app-modules/**/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
    "./composables/**/*.{js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      'primary': '#E40000',
      'primary-hover': '#CC0000',
      'white': '#FFFFFF',
      'bg-grafit': '#1B1B1B',
      'text-gray': '#9D9D9D',
      'text-gray-hover': '#979797',
      'text-dark': '#0F0F0F',
      'error': '#F13F36',
      'warning': '#FEBF22',
      'success': '#4FBA78',
    },
    fontSize: {
      'body-s-regular': ['16px', {
        'lineHeight': '22px',
        'fontWeight': '400',
      }],
      'body-m-regular': ['18px', {
        'lineHeight': '22px',
        'fontWeight': '400',
      }],
      'body-m-bold': ['18px', {
        'lineHeight': '22px',
        'fontWeight': '700',
      }],
      'body-m-extra-bold': ['18px', {
        'lineHeight': '22px',
        'fontWeight': '800',
      }],
      'h1-extra-bold': ['70px', {
        'lineHeight': '84px',
        'fontWeight': '800',
      }],
      'h2-extra-bold': ['50px', {
        'lineHeight': '65px',
        'fontWeight': '800',
      }],
      'h3-bold': ['24px', {
        'lineHeight': '32px',
        'fontWeight': '700',
      }],
    },
    spacing: {
      '0': '0px',
      '2': '2px',
      '4': '4px',
      '8': '8px',
      '10': '10px',
      '12': '12px',
      '16': '16px',
      '18': '18px',
      '20': '20px',
      '24': '24px',
      '28': '28px',
      '30': '30px',
      '32': '32px',
      '36': '36px',
      '38': '38px',
      '40': '40px',
      '42': '42px',
      '48': '48px',
      '56': '56px',
      '64': '64px',
      '96': '96px',
    },
  },
  plugins: [],
}
