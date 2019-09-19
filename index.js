function handleThumnailClicks() {
  $('.thumbnail').on('click', function(e) {
    let hero = $('.hero');
    console.dir(hero.children('img'));
    hero.children('img').remove();
    image = $(this).find('img');
    let src = image.attr('src');
    let alt = image.attr('alt');
    hero.append(`<img src="${src}" alt="${alt}">`);
  });
}

handleThumnailClicks();
