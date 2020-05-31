$(function(){
  /* #museum_found */
  var container=$('.container').width();
  var found_tab=$('.found_tab').width();
  var found_img=$('.found_img').width();
  
  $('.found_tabbox').css({width:container-(found_tab+found_img)-'80'});
  
  $(window).resize(function(){
    var container=$('.container').width();
    var found_tab=$('.found_tab').width();
    var found_img=$('.found_img').width();
  
    $('.found_tabbox').css({width:container-(found_tab+found_img)-'80'});
  });
  
  $('#museum_found .found_tab li').on('click',function(){
    var idx=$(this).index();
    $(this).addClass('on').siblings().removeClass('on');
    $('.found_tabbox').eq(idx).addClass('show').siblings().removeClass('show');
    
    if($('.found_tabbox').eq(1).hasClass('show')){
      $('.found_img img').attr('src','../images/museum_found2.jpg');
      $('.found_img figcaption').css({display:'block'});
    }else{
      $('.found_img img').attr('src','../images/museum_found.jpg');
      $('.found_img figcaption').css({display:'none'});
    }
  });
  
  
  /* #museum_shop */
  $('.shop_tabbox li').on('click',function(){
    $(this).addClass('on').siblings().removeClass('on');
    
    if($('.shop_tabbox .all').hasClass('on')){
      $('.shop .all').css({display:'block'});
      $('#museum_shop .shop li').css({margin:'0 0 30px'});
      $('#museum_shop .shop li:nth-of-type(3n+2)').css({margin:'0 5% 30px'});
    }else if($('.shop_tabbox .sma').hasClass('on')){
      $('.shop .other').css({display:'none'});
      $('.shop .sma').css({display:'block'});
      $('#museum_shop .shop li').css({margin:'0 0 30px'});
      $('.shop .m').css({margin:'0 5% 30px'});
    }else{
      $('.shop .sma').css({display:'none'});
      $('.shop .other').css({display:'block'});
      $('#museum_shop .shop li').css({margin:'0 0 30px'});
      $('.shop .other:nth-of-type(3n+1)').css({margin:'0 5% 30px'});
    }
  });
});

