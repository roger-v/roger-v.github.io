function anim_fadein(obj) {
  $(obj).animate({
  opacity: 1
  }, "slow");
}

function anim_slidein_fromtop(obj){
  $(obj).animate({
  opacity: 0
  }, "slow");
}