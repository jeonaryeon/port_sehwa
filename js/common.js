$(function(){
  /* nav */
  $('.ham_menu').on('click',function(){
    $(this).hide();
    $('#menu').addClass('show-gnb');
    $('.close, .gnb, .menu_bg').show();
    $('#n_icon').css({display:'block'});
    
    $(window).resize(function(){
      if($(window).width()>=1279){
        $('#n_icon').css({display:'block'});
      }
    });
  });
  
  $('.close').on('click',function(){
    $('#menu').removeClass('show-gnb');
    $('.close, .gnb, .menu_bg').hide();
    $('.ham_menu').show();
    
    if($(window).width()<=1279){
      $('#n_icon').css({display:'none'});
    }
    $(window).resize(function(){
      if($(window).width()<=1279){
        $('#n_icon').css({display:'none'});
      }
    });
  });
  
  $(".gnb p").on('click',function(){
    $(this).parent().siblings().find('.sub').hide();
    $(this).siblings('.sub').toggle();
  });
});
