var tests = require('./testsCommon');

var res = tests.SimpleOutputTestWithInputRange('/home/codio/workspace/public/branch1.crunch', 
  {min: 0, max: 40},
  function(inp, vars) {
    return [inp[0] > 20 ? 1 : 0];
  }
);
tests.FlushOutput();

process.exit(!res);