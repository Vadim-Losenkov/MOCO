$(function () {
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

  $('.header__burger').on('click', function (e) {
    $('.header-mobile').toggleClass('open')
  })
  $('.header-mobile__close, .header-mobile__menu-link').on('click', function (e) {
    $('.header-mobile').removeClass('open')
  })
  
  $('.header__menu-link, .header-mobile__menu-link, .header__logo').on('click', function (e) {
    e.preventDefault()
    const sectionID = $(this).attr('href')

    $('html, body').animate({
      scrollTop: $(sectionID).offset().top - 150
    }, {
      duration: 500,
    });
  })
  
  $('.quiz-select').niceSelect()

  $('.quiz-s').on('click', function(e) {
    setTimeout(() => {
      const $quiz = this.querySelector('[data-value="more"]')?.classList.contains('selected')
      if ($quiz) {
        this.querySelector('.quiz-input').classList.add('active')
      } else {
        this.querySelector('.quiz-input').classList.remove('active')
        this.querySelector('.quiz-input').value = ''
      }
    }, 0)
  })
})


new Swiper('.team__slider', {
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    700: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 4,
    },
  },
  spaceBetween: 30,
  pagination: {
    el: '.team__pagination',
    type: 'bullets',
  },
  navigation: {
    nextEl: '.team__arrows-right',
    prevEl: '.team__arrows-left',
  },
})
new Swiper('.reviews__slider', {
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 2,
    }
  },
  spaceBetween: 30,
  pagination: {
    el: '.reviews__pagination',
    type: 'bullets',
  },
  navigation: {
    nextEl: '.reviews__arrows-right',
    prevEl: '.reviews__arrows-left',
  },
})

const breakpoint = window.matchMedia('(max-width: 768px)')

let mySwiper

const breakpointChecker = () => {
  if (!breakpoint.matches) {
    if (mySwiper !== undefined) {
      mySwiper.destroy(true, true)
    }
  } else if (breakpoint.matches) {
    enableSwiper();
  }
}

const enableSwiper = () => {
  mySwiper = new Swiper('.cert__box', {
    spaceBetween: 0,
    slidesPerView: 2
  })
}

breakpoint.addListener(breakpointChecker)
breakpointChecker()

window.onscroll = function showHeader () {
  var headerNavigation = document.querySelector('.header__inner');
  if(window.pageYOffset > 50){
    headerNavigation.classList.add('header-fixed')
  } else {
    headerNavigation.classList.remove('header-fixed')
  }
}
