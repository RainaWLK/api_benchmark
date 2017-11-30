var rp = require('request-promise-native');
let env = require('./env.js');


async function runSingleTest(server, api){
  var options = {
    uri: server+api.uri,
    json: true // Automatically parses the JSON string in the response
  };

  try{
    let start_time = Date.now();
    let res = await rp(options);
    
    let time_duration = Date.now() - start_time;
    console.log(`[INFO] ${api.name} ${api.uri} ${time_duration}`);
    return res;
  }
  catch(err){
    throw err;
  }
}

async function runTests(){

  return await env.metrics.map(api => {
    try{
      return runSingleTest(env.server, api);
    }
    catch(err){
      //console.log("1 err");
      throw err;
    }
  });
}

exports.runTests = runTests;