// https://facebook.github.io/jest/docs/en/configuration.html
module.exports = {
  // https://jestjs.io/docs/en/configuration.html#verbose-boolean
  verbose: true,

  // https://jestjs.io/docs/en/configuration.html#collectcoveragefrom-array
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!**/node_modules/**', '!**/vendor/**'],

  // https://jestjs.io/docs/en/configuration.html#coveragedirectory-string
  coverageDirectory: '<rootDir>/coverage',

  // https://jestjs.io/docs/en/configuration.html#globals-object
  globals: {
    __DEV__: true,
  },

  // https://jestjs.io/docs/en/configuration.html#modulenamemapper-object-string-string
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },

  // eslint-disable-next-line max-len
  // https://jestjs.io/docs/en/configuration.html#transform-object-string-pathtotransformer-pathtotransformer-object
  transform: {
    '\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransformer.js',
  },
};
