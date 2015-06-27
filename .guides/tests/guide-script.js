window.addEventListener('codio-button-custom', function (ev) {
  if (codio) {
    TESTS.RESULT_BUTTON_ID = ev.id;
    
    TESTS.ShowProgress();
    
    $.get(window.location.origin + ':9500/get-crunch-file', {'file': ev.cmd}, function(data, error) {
      // 404 Error
      if (data === '404') {
        TESTS.ShowSysError('Unable to reach server. Please contact support@codio.com.');
        return;
      }
      
      // Select test
      switch (ev.cmd) {
        case 'branch-1.crunch':
          t_branch1(data);
          break;
        case 'branch-2.crunch':
          t_branch2(data);
          break;
        case 'branch-3.crunch':
          t_branch3(data);
          break;
        default:
          TESTS.ShowSysError('Test for ' + ev.cmd + ' not yet built.');
          break;
      }
    }).fail(function(err) {
      TESTS.ShowSysError('Server error: ' + err)
    });
  }
});


function t_branch1(data) {
  var inp = TESTS.GetRandomIntegerArray(1, 20);
  TESTS.SimpleOutputTest(data, inp, [], [inp[0] > 20 ? 1 : 0]);
}

function t_branch2(data) {
  var inp = TESTS.GetRandomIntegerArray(2, 20);
  TESTS.SimpleOutputTest(data, inp, [], [inp[0] + inp[1] > 20 ? 1 : 0]);
}

function t_branch3(data) {
  var inp = TESTS.GetRandomIntegerArray(1, 40)[0];
  var expected;
  if (inp <= 10) {
    expected = 0;
  } else if (inp <= 20) {
    expected = 1;
  } else if (inp <= 30) {
    expected = 2;
  } else {
    expected = 99;
  }
  TESTS.SimpleOutputTest(data, [], [{name: 'Number', value: inp}], [expected]);
}

