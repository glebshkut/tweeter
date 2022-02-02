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
  })
});