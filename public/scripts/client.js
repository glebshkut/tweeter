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

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];
  
  renderTweets(data);
});