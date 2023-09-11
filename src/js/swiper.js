const swiper = new Swiper('.container4__slider', {

  loop: true,
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 30,
  speed: 500,
  
  pagination: {
    el: '.container4__swiper-pagination',
    clickable: true,
    },
  
    navigation: {
      nextEl: '.container4__swiper-button-next',
      prevEl: '.container4__swiper-button-prev',
    },

    breakpoints: {

      1199:{
        slidesPerView:3,
        slidesPerGroup: 1,
      },

      991:{
        slidesPerView: 2.5,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },

      767:{
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 1,
      },

      575:{
        slidesPerView: 1.4,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },

      320:{
        slidesPerView: 1.1,
        slidesPerGroup: 1,
        spaceBetween: 15,
      }
    },

  });

  const swiper2 = new Swiper('.container6__swiper', {

    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 105,
    initialSlide: 0,
    speed: 600,
    
    pagination: {
      el: '.container6__swiper-pagination',
      clickable: true,
      },
    
      navigation: {
        nextEl: '.container6__swiper-button-next',
        prevEl: '.container6__swiper-button-prev',
      },

      breakpoints: {

        1199: {
          slidesPerView:3,
          slidesPerGroup: 1,
        },
  
        991:{
          slidesPerView: 2.4,
          spaceBetween: 105,
        },

        767:{
          slidesPerView: 2,
        },

        575:{
          slidesPerView: 1.5,
          spaceBetween: 90,
        },

        320:{
          slidesPerView: 1.5,
          spaceBetween: 90,
        },
      },
    });

    const swiper3 = new Swiper('.container9__swiper', {

      loop: true,
      slidesPerView: 1,
      slidesPerGroup: 1,
      speed: 500,
      spaceBetween: 20,

      pagination: {
        el: '.container9__swiper-pagination',
        clickable: true,
        },
      
        navigation: {
          nextEl: '.container9__swiper-button-next',
          prevEl: '.container9__swiper-button-prev',
        },
      });

  const swiper4 = new Swiper('.container10__slider', {

    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 25,
    speed: 2000,

    autoplay:{
      delay: 1500,
      stopOnLastSlide: true,
      disableOnInteraction: true,
    },

    pagination: {
      el: '.container10__swiper-pagination',
      clickable: true,
      },

    navigation: {
      nextEl: '.container10__swiper-button-next',
      prevEl: '.container10__swiper-button-prev',
    },

    breakpoints: {

      1199: {
        slidesPerView:3,
        slidesPerGroup: 1,
      },

      991:{
        slidesPerView: 2.5,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },

      767:{
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },

      575:{
        slidesPerView: 1.5,
        spaceBetween: 15,
      },

      320:{
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },

  });

  const swiper5 = new Swiper('.container11__swiper', {

    loop: true,
    centeredSlides: true,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 105,
    initialSlide: 0,
    speed: 600,
    
    pagination: {
      el: '.container11__swiper-pagination',
      clickable: true,
      },
    
      navigation: {
        nextEl: '.container11__swiper-button-next',
        prevEl: '.container11__swiper-button-prev',
      },

      breakpoints: {

        1199: {
          slidesPerView:3,
          slidesPerGroup: 1,
        },
  
        991:{
          slidesPerView: 2.3,
        },

        767:{
          slidesPerView: 1.8,
        },

        575:{
          slidesPerView: 1.5,
          spaceBetween: 95,
        },

        320:{
          slidesPerView: 1.5,
          spaceBetween: 90,
        }
      },
  
    });