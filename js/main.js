$(".projects_img").click(function(e){
  var $desc = $(this).parent().children('.desc');
  $("#proj_image").attr("src", $(this).parent().children('img').attr('src'));
  $("#proj_image").addClass("shadow");
  $("#project_view").html($desc.html());
  $("#backtotop").css({'display':'block'});
  
  $('html, body').animate({
        scrollTop: $("#project_view_container").offset().top
    }, 500);
});

$(".nav-link").click(function(e){
  if (this.getAttribute("href") != null) return;
  var dest = '#' + $(this).html().trim();
  $('html, body').animate({
        scrollTop: $(dest).offset().top - $('nav').height()
    }, 500);
});

function scrollTo(str) {
  $('html, body').animate({
        scrollTop: $(str).offset().top - $('nav').height()
    }, 500);
}

$(window).scroll(function(e){
  var aboutTop = $("#about").position().top;
  var windowTop = $(window).scrollTop(); 
  var introTop = $("#intro").position().top;
  console.log("about top " + (aboutTop - windowTop));
  console.log("intro top " + introTop);
  if (aboutTop - windowTop <= introTop) {
    $("#intro").css({"opacity":0});
  }
  else {
    $("#intro").css({"opacity":1});
  }
  
});