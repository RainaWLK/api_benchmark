'use strict';
let Mocha = require('mocha'),
fs = require('fs'),
path = require('path');

// Instantiate a Mocha instance.
let mocha = new Mocha();
let testDir = path.join(__dirname, 'build');

function runTest(){
  return new Promise((resolve, reject) => {
    // Add each .js file to the mocha instance
    fs.readdirSync(testDir).filter(function(file){
      // Only keep the .js files
      return file.substr(-3) === '.js';
    }).forEach(function(file){
      mocha.addFile(
          path.join(testDir, file)
      );
    });

    // Run the tests.
    mocha.run(function(failures){
      if(failures){
        reject();
      }
      else{
        resolve();
      }
      //process.on('exit', function () {
        //process.exit(failures);  // exit with non-zero status if there were failures
      //});
    });
  });
}


module.exports.main = (event, context, callback) => {

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  runTest().then(() =>{
    callback(null, response);
  });

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
