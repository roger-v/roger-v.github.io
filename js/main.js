$(".projects_img").click(function(e){
  $("#project_view_container").show();
  hideProjView(this);
  //revealProjView(this);
});

function hideProjView(obj){
  $("#project_view, #proj_image").animate({
    opacity: 0
  }, 250, null, function() {
    revealProjView(obj);
  });
}

function revealProjView(obj){
  var $desc = $(obj).parent().children('.desc');
  $("#proj_image").attr("src", $(obj).parent().children('img').attr('src'));
  $("#proj_image").addClass("shadow");
  $("#project_view").html($desc.html());
  $("#backtotop").css({'display':'block'});
  
  $("#project_view, #proj_image").animate({
    opacity: 1
  }, 250, null, function() {
    $('html, body').animate({
      scrollTop: $("#project_view_container").offset().top
  }, 250);
  });
  
  
}

$(".nav-link").click(function(e){
  if (this.getAttribute("href") != null) return;
  var dest = '#' + $(this).html().trim();
  $('html, body').animate({
        scrollTop: $(dest).offset().top - $('nav').height()
    }, 500);
});

$("#back_to_top").click(function(e){
  var dest = "#home";
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
  if (aboutTop - windowTop <= introTop) {
    $("#intro").css({"opacity":0});
  }
  else {
    $("#intro").css({"opacity":1});
  }
  
});

$("#project_view_container").hide();

$(".carousel").carousel();