module.exports = {
  linters: {
    '**/*.js': ['eslint'],
    '**/*.+(js|json|less|css|html|ts|tsx|md)': [
      'prettier',
      'git add',
    ],
  },
}
