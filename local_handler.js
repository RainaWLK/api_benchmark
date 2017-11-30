'use strict';
require('babel-polyfill');
let test = require('./build/test.js');

async function main() {
  try{
    await test.runTests();
    console.log("run test done");
    return;
  }
  catch(err){
    console.log("main err");
    console.log(err);
    throw err;
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

main();