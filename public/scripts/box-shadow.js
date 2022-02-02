$(() => {
  const $flag = $('article footer div i.fa-flag');
  const $retweet = $('article footer div i.fa-retweet');
  const $heart = $('article footer div i.fa-heart');
  const $article = $('article');

  $article.hover(
    function () {
        $(this).css('box-shadow', '5px 5px');
    }, function () {
        $(this).css('box-shadow', 'none');
    }
  );
  $flag.hover(
    function () {
        $(this).css('color', 'rgb(181 140 30)');
    }, function () {
        $(this).css('color', '#545149');
    }
  );
  $heart.hover(
    function () {
      $(this).css('color', 'rgb(181 140 30)');
  }, function () {
      $(this).css('color', '#545149');
  }
  );
  $retweet.hover(
    function () {
      $(this).css('color', 'rgb(181 140 30)');
  }, function () {
      $(this).css('color', '#545149');
  }
  );
})