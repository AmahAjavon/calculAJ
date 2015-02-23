'use strict';

$(document).ready(init);

function init() {
  $('.calculator').on('click', '.button', function() {
    var clickVal = $(this).text();
    var dispVal = $('input').val();
    var total = dispVal + clickVal;
    $('input').val(total);
  });

  $('#clear').on('click', function() {
    $('input').val('');
  });
  $('.calculator').on('click', '.root', function() {
    var sol = eval($('input').val());
    var root = Math.sqrt(sol);
    $('input').val(root);
  });
  $('.calculator').on('click', '.plusmin', function() {
    var sol = eval($('input').val());
    var plusmin = sol * -1;
    $('input').val(plusmin);
  });
  $('.calculator').on('click', '.equals', function() {
    if ($('input').val().match(/\^/g)) {
      var expo = $('input').val().split('^').map(function(e) {
        return parseInt(e);
      }); $('input').val(Math.pow(expo[0], expo[1]));
    } else {
      var sol = eval($('input').val());
      $('input').val(sol);
    }
  });
return false;
}
