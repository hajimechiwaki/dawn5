//! ======================================================
//!
//! function.js
//!
//! ======================================================


$(function(){

  var confirm = $.cookie('mitosaya_confirmination');
  $(window).on('load',function(){
    $('#modal_confirmination').addClass('-init');
    if(!confirm){
      $('#modal_confirmination').addClass('-show');
    }
  })


  $('#modal_confirmination_btn_true').on('click',function(){
    $.cookie('mitosaya_confirmination', '1', { expires: 365 });
    $('#modal_confirmination').removeClass('-show');
  });


  objectFitImages();

  var disableBodyScroll = bodyScrollLock.disableBodyScroll;
  var enableBodyScroll = bodyScrollLock.enableBodyScroll;

  var urlHash = location.hash;

  var body = $('body');
  var menu = $('#menu');
  var nav = $('#nav');
  var header = $('#header');

  checkbp();

  $('.product_imgs').slick({
    fade: true,
    arrows: false,
    dots: true
  })

  $(window).on('resize orientalchange',function(){
    checkbp();
  }).on('scroll',function(){
    checkbp();
  })

  $('[data-tile]').each(function(){
    var media_set = $(this).find('img,video').length;
    var media_loaded = 0;
    var medias = $(this);
    medias.find('video').each(function(){
      $(this).on('canplay', function() {
        media_loaded = media_loaded + 1;
      })
    });
    medias.imagesLoaded().done( function( instance ) {
      media_loaded = media_loaded + medias.find('img').length;
    })
    var timer = setInterval(function(){
      if( media_set == media_loaded ){
        clearInterval(timer);
        medias.masonry({
          itemSelector: '.tile_item'
        })
      }
    },100)
  })

  // $('[data-tile]').each(function(){
  //   $(this).masonry({
  //     itemSelector: '.tile_item'
  //   })
  // })


  function checkbp(){
      if($(window).width() > 480) {
        unslick($('[data-spslide]'));
      } else {
        slickinit($('[data-spslide]'));
      }
  }

  function slickinit(tgt){
    tgt.each(function(){
      $(this).slick({
        arrows: true,
        dots: true,
        fade: true,
      })
    })
  }

  function unslick(tgt){
    tgt.each(function(){
      if( $(this).hasClass('slick-initialized') ){
        $(this).slick('unslick');
      }
    })
  }


});




