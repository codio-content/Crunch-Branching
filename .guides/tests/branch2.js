var tests = require('./testsCommon');

var res = tests.SimpleOutputTestWithInputRange('/home/codio/workspace/public/branch2.crunch', 
  {num: 2, min: 0, max: 20},
  function(inp, vars) {
    return [inp[0] + inp[1] > 20 ? 1 : 0];
  }
);
tests.FlushOutput();

process.exit(!res);