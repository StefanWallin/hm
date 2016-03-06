'use strict';

const fs = require('fs');
const path = require('path');
const babel = require('babel-core');
const origJs = require.extensions['.js'];
let output;
require.extensions['.js'] = (module, fileName) => {
  if (fileName.indexOf('/node_modules/react-native/Libraries/react-native/react-native.js') > -1) {
    fileName = path.resolve('./test/support/mocks/react-native.js');
  }
  if (fileName.indexOf('node_modules/') >= 0) {
    return (origJs || require.extensions['.js'])(module, fileName);
  }
  const src = fs.readFileSync(fileName, 'utf8');
  output = babel.transform(src, {
    filename: fileName,
    sourceFileName: fileName,

    // keep below in sync with babelrc
    retainLines: true,
    compact: true,
    comments: false,
    plugins: [
      'syntax-async-functions',
      'syntax-class-properties',
      'syntax-trailing-function-commas',
      'transform-class-properties',
      'transform-es2015-arrow-functions',
      'transform-es2015-block-scoping',
      'transform-es2015-classes',
      'transform-es2015-computed-properties',
      'transform-es2015-constants',
      'transform-es2015-destructuring',
      ['transform-es2015-modules-commonjs', { strict: false, allowTopLevelThis: true }],
      'transform-es2015-parameters',
      'transform-es2015-shorthand-properties',
      'transform-es2015-spread',
      'transform-es2015-template-literals',
      'transform-flow-strip-types',
      'transform-object-assign',
      'transform-object-rest-spread',
      'transform-react-display-name',
      'transform-react-jsx',
      'transform-regenerator',
      'transform-es2015-for-of',
    ],
    sourceMaps: false,
  }).code;

  return module._compile(output, fileName);
};

