function t_branch1(data) {
  TESTS.SimpleOutputTestWithInputRange(data, {min: 0, max: 40}, function(inp, vars) {
    return [inp[0] > 20 ? 1 : 0];
  });
}

function t_branch2(data) {
  TESTS.SimpleOutputTestWithInputRange(data, {num: 2, min: 0, max: 20}, function(inp, vars) {
    return [inp[0] + inp[1] > 20 ? 1 : 0];
  });
}

function t_branch3(data) {
  TESTS.SimpleOutputTestWithInputRange(data, {name: 'Number', min: 0, max: 40}, function(inp, vars) {
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
  });
}

function t_branchOr(data) {
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
  if (TESTS.SimpleOutputTestWithInputRange(data, {name: VAR_NAME, min: 0, max: 11}, checkResult)) {
    TESTS.ShowProgress();
    TESTS.SimpleOutputTestWithInputRange(data, {name: VAR_NAME, min: 89, max: 101}, checkResult);
  }
}

function waitForCrunchScript() {
  if (!window.CRUNCH_COMMON_LOADED) {
    setTimeout(waitForCrunchScript, 100);
    return;
  }
  TESTS.SetupButtonTest();
}

waitForCrunchScript();

