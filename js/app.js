
// Banner Slider
$('.banner__container').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    cssEase: 'linear',
    autoplaySpeed: 4000,
  });

  // Testimonial slider 
  $('.testimonial__main__container').slick({
    dots: false,
    infinite: true,
    autoplay: true, 
    speed: 400,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // Preloder
  const loder = document.getElementById('preloder');
  window.addEventListener("load",function() {
    loder.style.display = "none";
  });