$(function(){ includeLayout(); }); 

  function includeLayout(){ var includeArea = $('[data-include]'); var self, url; $.each(includeArea, function() { self = $(this); url = self.data("include"); self.load(url, function() { self.removeAttr("data-include"); }); }); }

/* nav */
$(function(){
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
  
  $('.gnb p').on('click',function(){
    $(this).parent().siblings().find('.sub').hide();
    $(this).siblings('.sub').toggle();
  });  
}); // nav


/* #banner */
$(function(){
  function slides(){
    $('#banner .banner').stop().animate({left:'-50%'},500,function(){
      $('#banner .banner a:first').appendTo('#banner .banner');
      $('#banner .banner').css({left:0});
    });
  }
  setInterval(slides,5000);
}); // #banner


/* #notice */
$(function(){
  function notice(){
    $('#notice tbody').stop().animate({top:-40},300,function(){
      $('#notice tbody tr:first').appendTo('#notce tbody');
      $('#notice tbody').css({top:0});
    });
  }
  setInterval(notice,3000);
}); // #notice
