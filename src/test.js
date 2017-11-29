var rp = require('request-promise-native');
let env = require('./env.js');


async function runTest(){
  let url = env.server+env.uri;
  var options = {
    uri: url,
    json: true // Automatically parses the JSON string in the response
  };

  try{
    let start_time = Date.now();
    let res = await rp(options);
    
    let time_exceed = Date.now() - start_time;
    console.log("[INFO] "+url+" "+time_exceed);
    return res;
  }
  catch(err){
    throw err;
  }
}

exports.runTest = runTest;