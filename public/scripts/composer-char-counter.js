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




  const $tweetText = $('#tweet-text');

  const $errorMessage = $('main section.new-tweet div.error-message');

    $tweetText.keyup(function() {
      if ($tweetText.val() && $tweetText.val().length <= 140) {
        $errorMessage.text('');
      }

    });
});