import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';
import cssnano from 'cssnano';

export default {
  plugins: [
    tailwindcss,
    autoprefixer(),
    postcssPresetEnv({ stage: 1 }),
    cssnano({ preset: 'default' }),
  ],
};
