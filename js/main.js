var $body = $('body');

$('html').on('keydown', function (e) {
  var $name = $('<div>');
  var newLeft = Math.floor(Math.random() * (1000 - 0)) + 0;
  var newTop = Math.floor(Math.random() * (1000 - 0)) + 0;

  $name.addClass('ball');
  $body.append($name);
  $name.css('left', newLeft);
  $name.css('top', newTop);
});
