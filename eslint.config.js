// LINK: https://eslint.vuejs.org/
import pluginVue from 'eslint-plugin-vue'
import pluginTypescript from '@typescript-eslint/eslint-plugin';
import parserTypescript from '@typescript-eslint/parser';

export default [
  ...pluginVue.configs['flat/recommended'],

  {
    files: ['*.ts', '*.vue'],
    languageOptions: {
      parser: parserTypescript,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    plugins: {
      /**
       * @description Additional rules for TypeScript
      */
      '@typescript-eslint': pluginTypescript,
    },
  },
];