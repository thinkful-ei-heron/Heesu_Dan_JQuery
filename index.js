function handleThumnailClicks() {
    $('.thumbnail').on('click', function() {
        $('.event').children('img').remove()
    };
};
$('.thumbnail').on('click', e => {
    console.log(e.target);
  });
  