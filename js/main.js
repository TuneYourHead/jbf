$(document).ready(function(){

  //mobileOnlySlider
  function mobileOnlySlider() {
    $('.mobile-slider').slick({
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      arrows: false,
      slidesToShow: 1.5,
      infinite: false,
    });
  }

  if (window.matchMedia('(max-width: 800px)').matches) {
    mobileOnlySlider();
  }

  $(window).resize(function(e) {
    if (window.matchMedia('(max-width: 800px)').matches) {
      if (!$('.mobile-slider').hasClass('slick-initialized')) {
        mobileOnlySlider();
      }
    } else {
      if ($('.mobile-slider').hasClass('slick-initialized')) {
        $('.mobile-slider').slick('unslick');
      }
    }
  });

  //iconAnimation
  $('#nav-icon').click(function(){
    $(this).toggleClass('open');
    $('.header-nav').toggleClass('header-nav_mobile-active');
  });
  //sectionHover
    $('.link-wrapper').hover(function(){
      console.log("hovered");
      $(this).siblings('.accent-btn').addClass('accent-btn_active');
    }, function(){
      $(this).siblings('.accent-btn').removeClass('accent-btn_active');
    })

  //slider
  $('.slider-wrapper').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1
  });

  //maskInputs
  $('input[type="tel"]').mask('(000) 000-0000');

  //labelAnimation
  $(".form-input-wrapper").on("focusin", function() {
    $(this).addClass("active");
  });

  $(".form-input-wrapper").on("focusout", function() {
    if ($(this).find('input').val() == "" || $(this).find('textarea').val() == "") {
        $(this).removeClass("active");
    };
  });

  //dropdowm
  if (window.matchMedia('(min-width: 801px)').matches) {
    $('.header-nav-item_parent, .menu-item-has-children').hover(function(){
      $(this).find('.header-subnav').addClass('header-subnav_active');
      $(this).find('.sub-menu').addClass('header-subnav_active');
    }, function(){
      $(this).find('.header-subnav').removeClass('header-subnav_active');
      $(this).find('.sub-menu').removeClass('header-subnav_active');
    });
  }else{
    $('.header-nav-item_parent-link').on("click", function(e){
      e.preventDefault();
      console.log('clicked');
      $(this).siblings('.header-subnav').toggle('header-subnav_mobile-active');
    });
  }



  //smoothScroll
  function smoothScrollingTo(target){
    $('html,body').animate({scrollTop:$(target).offset().top}, 500);
  }
  $('a[href*=\\#]').on('click', function(event){
    event.preventDefault();
    smoothScrollingTo(this.hash);
  });

  //smoothScrollOnLoad
  window.onload= function(){
    if(window.location.hash) {
      smoothScrollingTo(location.hash);
    }
  };

  //fastClick
  FastClick.attach(document.body);

  //highlightCurrentPage
  var currentPage = window.location.href.split('#')[0];
  $('a[href$="'+currentPage+'"]').addClass('active');
});
