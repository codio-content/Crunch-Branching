function t_branch1(data) {
  TESTS.SimpleOutputTest(data, {min: 0, max: 20}, function(inp, vars) {
    return [inp[0] > 20 ? 1 : 0];
  });
}

function t_branch2(data) {
  TESTS.SimpleOutputTest(data, [{min: 0, max: 20}, {min: 0, max: 20}], function(inp, vars) {
    return [inp[0] + inp[1] > 20 ? 1 : 0];
  });
}

function t_branch3(data) {
  TESTS.SimpleOutputTest(data, [{name: 'Number', min: 0, max: 40}], function(inp, vars) {
    var expected;
    var var0 = vars[0].value;
    if (var0 <= 10) {
      expected = 0;
    } else if (var0 <= 20) {
      expected = 1;
    } else if (var0 <= 30) {
      expected = 2;
    } else {
      expected = 99;
    }
    return [expected];
  });
}

TESTS.SetupButtonTest();

