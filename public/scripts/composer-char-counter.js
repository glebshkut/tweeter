$(() => {
  const $textArea = $('textarea#tweet-text');
  $textArea.on('input', function() {
    let value = 140 - $textArea.val().length;
    const $counter = $('section.new-tweet form div output.counter');
    $counter.val(value);
    if (value < 0) {
      $counter.css('color', '#ff0000');
    } else {
      $counter.css('color', '#535149');
    }
  });


  const $button = $('main form button');
  $button.prop('disabled', true);

  const $tweetText = $('#tweet-text');

    $tweetText.keyup(function() {
      // if null or ''
      if (!$(this).val()) {
        $button.prop('disabled', true);
        alert('Your tweet should include text!')
      } else if ($(this).val().length > 140) {
        $button.prop('disabled', true);
        alert('Your tweet can\'t include more than 140 characters');
      } else {
        $button.prop('disabled', false);
      }
      // if more than 140 chars

    });
});