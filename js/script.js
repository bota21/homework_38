$(() => {
  $("a.header_wrappers_wrapper_scroll").on("click", function(e){
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 0
    }, 800);
});
$('.slick').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
});
});

{/* <div class="container promo_container">
<h5 class="promo_wrappers_title">specialties</h5>
<div class="promo_wrappers">
  <div class="promo_wrappers_wrapper">
    <div class="promo_wrappers_wrapper_frame wrapper_frame"></div>
    <img src="img/desert.png" alt="Desert" class="promo_wrapper_image">
  </div>
  <div class="promo_wrappers_wrapper">
    <h3 class="promo_wrappers_wrapper_title">chocolate pancakes</h3>
    <div class="promo_wrappers_wrapper_border wrapper_border"></div>
    <p class="promo_wrappers_wrapper_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
      velit maximus, molestie est a, tempor magna.</p>
    <p class="promo_wrappers_wrapper_text">Integer ullamcorper neque eu purus euismod, ac faucibus mauris
      posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros,
      a
      sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis
      semper
      laoreet.</p>
  </div>
</div>
</div> */}