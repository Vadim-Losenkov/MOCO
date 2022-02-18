$(function() {
  if ($(".reviews__item-rate").length) {
    $(".reviews__item-rate").rateYo({
      readOnly: true,
      ratedFill: "#FBB040",
      normalFill: "#c4c4c4",
      starWidth: "17px"
    })
  }
  $('.open-popup').magnificPopup({
    type: 'inline',
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function () {
        this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

  $('.header__burger').on('click', function(e) {
    // $(this).toggleClass('open')
    $('.header-mobile').toggleClass('open')
  })
  $('.header-mobile__close').on('click', function(e) {
    // $(this).toggleClass('open')
    $('.header-mobile').toggleClass('open')
  })
})


new Swiper('.team__slider', {
  breakpoints: {
        // when window width is <= 499px
        1200: {
            slidesPerView: 3,
            spaceBetweenSlides: 30
        },
  },
  // slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: '.team__arrows-right',
    prevEl: '.team__arrows-left',
  },
})
new Swiper('.reviews__slider', {
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: '.reviews__arrows-right',
    prevEl: '.reviews__arrows-left',
  },
})