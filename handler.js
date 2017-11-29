'use strict';
require('babel-polyfill');
let test = require('./build/test.js');

module.exports.main = (event, context, callback) => {

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  test.runTest().then(() =>{
    callback(null, response);
  }).catch(err => {
    callback(err);
  });

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
