// https://jestjs.io/docs/en/webpack#mocking-css-modules
const path = require('path');

module.exports = {
  process({ filename }) {
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  },
};
