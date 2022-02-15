$(function() {
  if ($(".reviews__item-rate").length) {
    $(".reviews__item-rate").rateYo({
      readOnly: true,
      ratedFill: "#FBB040",
      normalFill: "#c4c4c4",
      starWidth: "17px"
    })
  }
})


new Swiper('.team__slider', {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: '.team__arrows-right',
    prevEl: '.team__arrows-left',
  },
})