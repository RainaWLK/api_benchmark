'use strict';
require('babel-polyfill');
let test = require('./build/test.js');

async function main() {
  await test.runTest();
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

main();