// postcss.config.js
import postcssNesting from 'postcss-nesting';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    postcssNesting, // ⚠️ antes de Tailwind
    tailwindcss,
    autoprefixer,
  ],
};
