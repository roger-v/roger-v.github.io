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

function fadeDownAnim($obj){
   
}

$("#project_view_container").hide();

$(".carousel").carousel();

function introAnimations() {
  $("#profileImg").animate({left: "-=200px"}, 1000, null, function() {
    $("#hi").animate({opacity:1}, 1000, null, function(){
      $("#imroger").animate({opacity:1}, 1000, null, function() {
        $("#introtext").animate({opacity:1}, 2000, null, function() {
          $("#fadinglineintro").animate({opacity:1}, 500, null, function() {
            $("#link1").animate({opacity:1, top:0}, 250, null, function() {
              $("#link2").animate({opacity:1, top:0}, 250, null, function() {
                $("#link3").animate({opacity:1, top:0}, 250, null, function() {
                  $("#link4").animate({opacity:1, top:0}, 250);
                });
              });
            });
          });
        });
      });
    });
  });
  
  
}


introAnimations();