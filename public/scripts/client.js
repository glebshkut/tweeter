$(() => {

  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      $('#tweets-container').append(createTweetElement(tweet));
    }
  }

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
              <span>
                ${tweet.content.text}
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
    $('form').trigger('reset');

    $.ajax({
      method: 'POST',
      url: '/tweets',
      data
    });

  });


  const loadtweets = function() {
    $.ajax('/tweets', { 
      method: 'GET' ,
      dataType: 'json'})
    .then(function (data) {
      renderTweets(data);
    });



  }
  loadtweets();


});