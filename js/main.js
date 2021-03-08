// document.querySelector('.hamburger_menu').addEventListener('click', () => {
//     document.querySelector('.container').classList.toggle('change');
// });

$(function () {
    $(".portfolio__slider").slick({
      prevArrow:
        '<button type="button" class="slick-prev"><img src="images/arrow-1.svg" alt=""></button>',
      nextArrow:
        '<button type="button" class="slick-next"><img src="images/arrow-2.svg" alt=""></button>',
      autoplay: true,
      fade: true,
    });
  });
