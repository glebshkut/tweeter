$(() => {

  const $arrowButton = $('nav div.right-side-nav');
  const $newTweet = $('#tweets-container section.new-tweet');

  // clicking on new-tweet button/arrow from nav menu
  $arrowButton.on('click', function() {
    // if form is visible, hide it
    if ($newTweet.is(":visible")) {
      $newTweet.slideUp("slow");
    } else {
      // if invisible, show it and focus on input field
      $newTweet.slideDown("slow");
      $newTweet.find('textarea#tweet-text').focus();
    }
  })

  const $scrollTopButton = $('#scrollTopButton');

  $(window).scroll(() => {
    // if it's top of the page
    if ($(this).scrollTop() === 0) {
      // then hide scroll toTheTopButton and display arrowButton
      $scrollTopButton.slideUp("fast");
      $arrowButton.slideDown("fast");
    } else {
      // if not on the top of the page:
      
      // then display toTheTopButton and hide arrowButton
      $scrollTopButton.slideDown("fast");
      $arrowButton.slideUp("fast");

      // if tweet form is visible, hide it
      if ($newTweet.is(":visible")) {
        $newTweet.slideUp("slow");
      }
    }
  });

  $scrollTopButton.on('click', () => {
    $(window).scrollTop(0);
    // displaying new-tweet form
    $newTweet.slideDown("slow");
    // focusing on input field
    $newTweet.find('textarea#tweet-text').focus();
  });


});