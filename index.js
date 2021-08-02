module.exports = {
  root: true,

  env: {},

  extends: [
    'standard-with-typescript'
  ],

  parser: '@typescript-eslint/parser',

  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: ['./tsconfig.json']
      }
    }
  ],

  plugins: ['@typescript-eslint'],

  settings: {
    'import/resolver': {
      typescript: {}
    }
  }
}
