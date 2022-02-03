$(() => {



  const $arrowButton = $('nav div.right-side-nav');
  const $newTweet = $('#tweets-container section.new-tweet');

  $arrowButton.on('click', function() {
    if($newTweet.is(":visible")) {
      $newTweet.slideUp("slow");
    } else {
      $newTweet.slideDown("slow");
      $newTweet.find('textarea#tweet-text').focus();
    }
  })


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
    console.log('The form has been submitted');

    const data = $(this).serialize();
    const text = $('textarea#tweet-text').val();

    const $errorMessage = $('main section.new-tweet div.error-message');
  
    if (!text) {
      return $errorMessage.text('Your tweet should include text!').slideDown(400, () => {});
    } else if (text.length > 140) {
      return $errorMessage.text('Your tweet can\'t include more than 140 characters').slideDown(400, () => {});
    }
    
    
    $errorMessage.text('');

    $('form').trigger('reset');

    $.ajax({
      method: 'POST',
      url: '/tweets',
      data
    }).then(() => {
      loadtweets();
    })

  });


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