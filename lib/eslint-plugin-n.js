module.exports = {
  extends: ['plugin:n/recommended'],
  rules: {
    'n/exports-style': ['error', 'module.exports'],
    'n/file-extension-in-import': ['error', 'always'],
    'n/prefer-global/buffer': ['error', 'always'],
    'n/prefer-global/console': ['error', 'always'],
    'n/prefer-global/process': ['error', 'always'],
    'n/prefer-global/url-search-params': ['error', 'always'],
    'n/prefer-global/url': ['error', 'always'],
    'n/prefer-promises/dns': 'error',
    'n/prefer-promises/fs': 'error'
  }
}
