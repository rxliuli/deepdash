module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  env: {
    mocha: true,
  },
  rules:{
  "no-sparse-arrays": "off"
  }
}