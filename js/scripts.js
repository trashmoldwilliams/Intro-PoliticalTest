$(function() {
  $('form#questions').submit(function(event) {
    var q1 = $('input[name="q1"]:checked', '#questions').val();
    var q2 = $('input[name="q2"]:checked', '#questions').val();
    var q3 = $('input[name="q3"]:checked', '#questions').val();
    var score = 0;

    if (q1 === 'lib') {
      score -= 1;
    }else if (q1 === 'cons') {
      score += 1;
    }

    if (q2 === 'lib') {
      score -= 1;
    }else if (q2 === 'cons') {
      score += 1;
    }

    if (q3 === 'lib') {
      score -= 1;
    }else if (q3 === 'cons') {
      score += 1;
    }

    if (score < -1) {
      $('#lib').show();
    }else if (score >= -1 && score <= 1) {
      $('#mod').show();
    }else {
      $('#cons').show();
    }

    event.preventDefault();

  });

});
