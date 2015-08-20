var tests = require('./testsCommon');

var res = tests.SimpleOutputTestWithInputRange('/home/codio/workspace/public/branch3.crunch',
  {name: 'Number', min: 0, max: 40},
  function(inp, vars) {
    var var0 = vars[0].value;
    if (var0 <= 10) {
      return [0];
    } else if (var0 <= 20) {
      return [1];
    } else if (var0 <= 30) {
      return [2];
    } else {
      return [99];
    }
  }
);
tests.FlushOutput();

process.exit(!res);