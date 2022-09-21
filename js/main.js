$(function(){

  $(window).scroll(function(){

    var scrollPos = $(window).scrollTop();
    // console.log(scrollPos);

    if(scrollPos > 20){
      $('#header').addClass('fixed');
    }else{
      $('#header').removeClass('fixed');
    }
  });

  $(window).load(function(){
    $('.grid').isotope({
      // options
      itemSelector: '.grid-item',
      layoutMode: 'fitRows'
    });
  })

  // Isotope Filter Setting
  var grid = $('.grid');
  var m1 = $('#m1');
  var m2 = $('#m2');
  var m3 = $('#m3');
  var m4 = $('#m4');

  // 라이트박스 초기 설정
  $('.grid-item a').magnificPopup({
    type:'inline',
    closeOnBgClick: false,
    closeBtnInside: true,
    gallery: {
      enabled: true
    }
  });
  $('.grid-item a').magnificPopup({
    type:'inline',
    closeOnBgClick: false, 
    closeBtnInside: true,  
    gallery: {
      enabled: true
    }
  });

  m1.click(function(e){
    grid.isotope({
      filter : '.grid-item',
      itemSelector: '.grid-item',
      layoutMode: 'fitRows'
    });

    $('.grid-item a').magnificPopup({
      type:'inline',
      closeOnBgClick: false, 
      closeBtnInside: true,  
      gallery: {
        enabled: true
      }
    });

    e.preventDefault();
  });
  
  m2.click(function(e){
    grid.isotope({
      filter : '.g1',
      itemSelector: '.grid-item',
      layoutMode: 'fitRows'
    });

    $('.g1 a').magnificPopup({
      type:'inline',
      closeOnBgClick: false, 
      closeBtnInside: true,  
      gallery: {
        enabled: true
      }
    });


    e.preventDefault();
  });

  m3.click(function(e){
    grid.isotope({
      filter : '.g2',
      itemSelector: '.grid-item',
      layoutMode: 'fitRows'
    });

    $('.g2 a').magnificPopup({
      type:'inline',
      closeOnBgClick: false, 
      closeBtnInside: true,  
      gallery: {
        enabled: true
      }
    });

    e.preventDefault();
  });

  m4.click(function(e){
    grid.isotope({
      filter : '.g3',
      itemSelector: '.grid-item',
      layoutMode: 'fitRows'
    });

    $('.g3 a').magnificPopup({
      type:'inline',
      closeOnBgClick: false, 
      closeBtnInside: true,  
      gallery: {
        enabled: true
      }
    });

    e.preventDefault();
  });

  

  $('a').click(function () {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
    return false;
  });

  /* WOW JS */
  new WOW().init();

  /* Type-It */
  $('.type-it').typeIt({
    strings: ['LEE SEUNG MIN'],
    loop: true,
    breakLines: false,
    cursor: true,
    speed: 200
  });

  /* PROGRESS JS */
    var controller = new ScrollMagic.Controller();

    var bar1 = $('.right-box li:nth-child(1) .determinate');
    var bar2 = $('.right-box li:nth-child(2) .determinate');
    var bar3 = $('.right-box li:nth-child(3) .determinate');
    var bar4 = $('.right-box li:nth-child(4) .determinate');
    var bar5 = $('.right-box li:nth-child(5) .determinate');
    var t1 = new TimelineMax({
    });
    
    t1.fromTo(bar1, 1, {width: '0%'}, {width: '83%'}, 0.5)
    .fromTo(bar2, 2, {width: '0%'}, {width: '80%'}, 0.7)
    .fromTo(bar3, 3, {width: '0%'}, {width: '83%'}, 0.9)
    .fromTo(bar4, 4, {width: '0%'}, {width: '80%'}, 1.1)
    .fromTo(bar5, 5, {width: '0%'}, {width: '83%'}, 1.3)
    
    var scene = new ScrollMagic.Scene({
      triggerElement: '#about .right-box',
      triggerHook: 5,
    })
    .setTween(t1)
    .addTo(controller);
    
    var $statItem = $('.count');
    
    $statItem.each(function(){
      
      var currentItem = $(this),
      $rateNum = currentItem.attr('date-rate');
      
      $({mycount:0}).animate({mycount:$rateNum}, {
        duration: 6000,
        progress:function(){
          var now = this.mycount;
          currentItem.text(Math.floor(now)+'%');
        },
        
      });
    });
});
