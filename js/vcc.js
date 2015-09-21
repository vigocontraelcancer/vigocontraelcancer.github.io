
$(".overlay-hugeinc a").click(function(){
  var scrollClass = $(this).attr("data-scroll");
  $(document).scrollTo(scrollClass);
  toggleOverlay();
});

  var sectionHeight = $(window).height();
  var sectionHeight2 = $(window).height()*2;
  $(".first-container, .second-container, .intro-video-overlay").height(sectionHeight);
  $(".third-container, .forth-container").height(sectionHeight2);

  $(document).ready(function(){
    $("#nav-icon").click(function(){
      if ($(this).hasClass("openMenu")) {
        $(this).removeClass("openMenu");
      } else {
        $(this).addClass("openMenu");
      }
    });
    $(".overlay li").click(function(){
      $("#nav-icon").removeClass("openMenu");
    });
  });

//VIDEO OPEN AND CLOSE
$(".playAnimate, .videoFilter").click(function(){
  $(".second-container .side0512").animate({width:"100%"}, 700);
  $(".second-container .side0712").hide();
  $(".intro-video-overlay").animate({opacity:"1"}, 1500).delay(700);
  $(".video-container-container").show();
  setTimeout(
  function() 
    {
      $(".intro-video-overlay").show().animate({opacity:"1"}, 1500);
    }, 1500);
});
var setWidthBack = $(".second-container .side0512").width();
$('.intro-video-overlay').mousedown(function(e) {
  var clicked = $(e.target);
  if (clicked.is('.intro-video-container, .no-disponible') || clicked.parents().is('.intro-video-container, .no-disponible')) {
    return;
   } else {

     $('.intro-video-overlay, .video-container-container, .no-disponible').hide();
     $(".second-container .side0512").animate({width:setWidthBack}, 700);
     $(".second-container .side0712").show();
     $('.video-container iframe').each(function(){
        this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
     });
   }
});

//OPEN MODAL
$(".call-action").click(function(){
  $(".intro-video-overlay").animate({opacity:"1"}, 500);
  $(".intro-video-overlay, .no-disponible").show();
});

//MAP OPEN/CLOSE NAVIGATION
$(".mapText").click(function(){
  if ($(this).hasClass("closeMap")) {
    $(this).animate({height:"94%"}, 1000);
    $(this).removeClass("closeMap");
  } else {
    $(this).animate({height:"30%"}, 1000);
    $(this).addClass("closeMap");
  }
});

//MAP ON SCROLL EFFECT
$("body").scroll(function() {
    if($(".map-container").scrollTop()) {
        $("span").show();    
    } else {
        $("span").hide();
    }
});
$(function() {
    var $mappingTime = $('.map-container');
    $window = $(window);
    offset = $mappingTime.offset();
    var $iframing = $('#fixme');

    $window.scroll(function() {
        if ($window.scrollTop() > offset.top) {
            $iframing.css({'position': 'fixed'});
            $iframing.css({'z-index': -1});
        } else {
            $iframing.css({'position': 'relative'});
            $iframing.css({'z-index': 0});
        }
    });            
});


//CHART ANIMATION
$(".results-14").click(function(){
  $(".chart-interior").animate({width:"69%"}, 1000);
  $(".chart-ingresos p").text("11.581,93€");
  $(".chart-gastos").animate({width:"28%"}, 1000);
  $(".chart-gastos p").text("3.223,25€");
  $(".chart-donado").animate({width:"72%"}, 1000);
  $(".chart-donado p").text("8.358,68€");
});

$(".results-15").click(function(){
  $(".chart-interior").animate({width:"100%"}, 1000);
  $(".chart-ingresos p").text("16.834.91€");
  $(".chart-gastos").animate({width:"45.7%"}, 1000);
  $(".chart-gastos p").text("7.692,25€");
  $(".chart-donado").animate({width:"54.3%"}, 1000);
  $(".chart-donado p").text("9.142,66€");
});