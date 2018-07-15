$("#projects img").click(function(e){
  console.log($(this).parent().children('.desc').html());
  var $desc = $(this).parent().children('.desc');
  $("#proj_image").attr("src", $(this).parent().children('img').attr('src'));
  $("#proj_image").addClass("shadow");
  $("#project_view").html($desc.html());
  $("#backtotop").css({'display':'block'});
  
  $('html, body').animate({
        scrollTop: $("#project_view_container").offset().top
    }, 500);
});