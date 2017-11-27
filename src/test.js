import 'babel-polyfill'

var chai = require('chai');
let should = chai.should();

let supertest = require('supertest');
let expect = chai.expect;

let env = require('./env.js');


chai.use(require('chai-ajv-json-schema'));
//chai.use(require('chai-things'));

let start_time;

before(() => {
  start_time = Date.now();
});
it('test', async () => {
  let req = supertest(env.server);
  let res = await req.get(env.uri);
  res.statusCode.should.eql(200);
});

after(() => {
  let time_exceed = Date.now() - start_time;
  console.log(time_exceed);
});
