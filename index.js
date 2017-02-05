(function( $ ){
  $.fn.pluginName = function() {

    function corectOptions(options){
      return ($.extend({
        direction:'false',
        index:0,
        debug:'true'},options));
    }

    $('li').click(function(){

      setting=corectOptions({direction:($('input.down').is(':checked')),
      index:($('input.index').val()),debug:($('input.debug').is(':checked'))});
      this_position=$(this).offset().top-8+'px';
      if (setting.direction) {
        element_down=$('li').length-Number(setting.index)-1;
        position=$('li').eq(element_down).offset().top-8+'px';
      } else {
        element_up=Number(setting.index);
        position=$('li').eq(element_up).offset().top-8+'px';
      }
      $(this).addClass("stoped");
      $(this).after("<div></div>");
      $(this).css({position:"absolute",top:this_position}).animate({left:"+=200px"}).animate({top:position},
      function(){
        $('div').remove();
        if (setting.direction) {
          position=$('li').eq(element_down).after("<div></div>");
        } else {
          position=$('li').eq(element_up).before("<div></div>");
        }
     })
     .animate({left:"-=200px"},
         function(){
            $('div').replaceWith($("li.stoped"));
            $('li.stoped').css({position:'static'});
            $('li.stoped').removeClass('stoped');
            if (setting.debug){
              console.log($('li'));
            };
          });
    });
  }
})( jQuery );
$('ul').sortable();
$('ul').pluginName();
