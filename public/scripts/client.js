$(() => {


const createTweetElement = function(obj) {
  const result = `
  <article class="tweet">
        <header>
          <div>
          <img class="user-avatar" src=${obj.user.avatars}>
          <span class="tweet-creator-name">${obj.user.name}</span>
          </div>
          <span class="tweet-creator-username">${obj.user.handle}</span>
        </header>
            <span>
              ${obj.content.text}
            </span>
        <footer>
          <span class="date">${obj.created_at}</span>
          <div class="footericons">
            <i class="fa-solid fa-flag"></i>
            <i class="fa-solid fa-retweet"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
        </footer>
      </article>
`;
  return result;
}

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1643577861279
}

const $tweet = createTweetElement(tweetData);

console.log($tweet);
$('#tweets-container').append($tweet);
});