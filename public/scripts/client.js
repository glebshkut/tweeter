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
  // listen for any scrolling
  $(window).scroll(() => {
    // if it's top of the page
    if ($(this).scrollTop() === 0) {
      // then hide scroll toTheTopButton and display arrowButton
      $scrollTopButton.slideUp("fast");
      $arrowButton.slideDown("fast");
    } else {
      // if not top of the page:
      
      // then display toTheTopButton and hide arrowButton
      $scrollTopButton.slideDown("fast");
      $arrowButton.slideUp("fast");

      // if tweet form is visible, hide it
      if ($newTweet.is(":visible")) {
        $newTweet.slideUp("slow");
      }
    }
  });

  // clicking GoToTop button
  $scrollTopButton.on('click', () => {
    $(window).scrollTop(0);
    // displaying new-tweet form
    $newTweet.slideDown("slow");
    // focusing on input field
    $newTweet.find('textarea#tweet-text').focus();
  });



  // looping through array of tweets
  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      $('#tweets-container div.tweets').prepend(createTweetElement(tweet));
    }
  }

   // SECURITY function
   const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function(tweet) {
    const $result = `
    <article class="tweet">
          <header>
            <div>
            <img class="user-avatar" src=${tweet.user.avatars}>
            <span class="tweet-creator-name">${tweet.user.name}</span>
            </div>
            <span class="tweet-creator-username">${tweet.user.handle}</span>
          </header>
              <span class="tweet-content-text">
                ${escape(tweet.content.text)}
              </span>
          <footer>
            <span class="date">${timeago.format(tweet.created_at)}</span>
            <div class="footericons">
              <i class="fa-solid fa-flag"></i>
              <i class="fa-solid fa-retweet"></i>
              <i class="fa-solid fa-heart"></i>
            </div>
          </footer>
        </article>
  `;
    return $result;
  }
  
 

  $('main#tweets-container form').on('submit', function (event) {
    event.preventDefault();

    // turning value into query string
    const data = $(this).serialize();
    const text = $('textarea#tweet-text').val();

    const $errorMessage = $('main section.new-tweet div.error-message');
  
    if (!text) {
      return $errorMessage.text('Your tweet should include text!').slideDown(400, () => {});
    } else if (text.length > 140) {
      return $errorMessage.text('Your tweet can\'t include more than 140 characters').slideDown(400, () => {});
    }
    
    // clearing error message
    $errorMessage.text('');
    // clering form
    $('form').trigger('reset');
    // making post request to 'database'
    $.ajax({
      method: 'POST',
      url: '/tweets',
      data
    }).then(() => {
      loadtweets();
    })

  });

  // loading tweets from 'database'
  const loadtweets = function() {
    $.ajax('/tweets', { 
      method: 'GET' ,
      dataType: 'json'})
    .then(function (data) {
      $('main#tweets-container div.tweets').empty();
      renderTweets(data);
    });



  }


  loadtweets();

});