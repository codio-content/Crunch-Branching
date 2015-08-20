var tests = require('./testsCommon');

var VAR_NAME = 'Number';
var checkResult = function(inp, vars) {
  var var0 = vars[0].value;
  var expected = [];
  if ((var0 >= 1 && var0 <= 10) || (var0 >= 90 && var0 <= 100)) {
    expected.push(1);
  } else {
    expected.push(0);
  }
  expected.push(99);
  return expected;
};

var res = tests.SimpleOutputTestWithInputRange('/home/codio/workspace/public/branchOr.crunch',
  {name: VAR_NAME, min: 0, max: 11}, checkResult);
if (res) {
  res = tests.SimpleOutputTestWithInputRange('/home/codio/workspace/public/branchOr.crunch',
    {name: VAR_NAME, min: 89, max: 101}, checkResult);
}
tests.FlushOutput(1);

process.exit(!res);