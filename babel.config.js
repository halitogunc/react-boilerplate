// https://babeljs.io/docs/usage/api/
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 2 versions'],
        },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    // https://babeljs.io/docs/en/next/babel-plugin-proposal-object-rest-spread
    '@babel/proposal-object-rest-spread',

    // https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import
    '@babel/plugin-syntax-dynamic-import',

    // https://babeljs.io/docs/en/babel-plugin-proposal-class-properties
    '@babel/plugin-proposal-class-properties',

    // https://github.com/gaearon/react-hot-loader/blob/master/README.md
    'react-hot-loader/babel',
  ],
};
