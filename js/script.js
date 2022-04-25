$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 3,
    autoplay: true,
    draggable: true,
    swipe: true,
    touchTheshold: 10,
    variableWidth: false,
    lazyLoad: "ondemand",
    infinite: true,

    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  $(".slider").slick("setPosition");

  window.onscroll = function () {
    let scrolled = window.pageYOffset;
    if (scrolled > 300) {
      $(".header").css({ background: "white" });
      $(".header").css({ color: "black" });
      $(".header").css({ borderBottom: "rgba(0, 0, 0, 0.4) 0.5px solid" });
    }
    if (scrolled < 300) {
      $(".header").css({ background: "none" });
      $(".header").css({ color: "white" });
      $(".header").css({ borderBottom: "none" });
    }
  };
});
