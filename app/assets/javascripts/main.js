$(document).ready(function() {

  var view = "home"
  $(".small_head ").hide();
  $("#content").hide();
  $(".stuff").hide();

  $(".link").click(function() {
    target = $(this).attr("target");
    $(".selected").removeClass("selected");
    $(".link[target="+target+"]").addClass("selected")
    console.log($(".link[target="+target+"]"))
    view = animate(target, view)
  })

  $(".fancybox-thumb").fancybox({
    prevEffect  : 'none',
    nextEffect  : 'none',
    helpers : {
      title : {
        type: 'outside'
      },
      overlay : {
        opacity : 0.8,
        css : {
          'background-color' : '#000'
        }
      },
      thumbs  : {
        width : 50,
        height  : 50
      }
    }
  });

  $(".various").fancybox({
    maxWidth  : 800,
    maxHeight : 600,
    fitToView : false,
    width   : '70%',
    height    : '70%',
    autoSize  : false,
    closeClick  : false,
    openEffect  : 'none',
    closeEffect : 'none'
  });

  var fancyboxClose = (function(){
    var loaded = 0;    
    return function(){ 
        if(loaded++ % 2) $.fancybox.close();
    }
  })();
})

function animate(target, view) {
  var time = 500;
  if(target == "about" || target == "team" || target == "media") {
    if(view == "home") {
      $("body").css({
        backgroundColor: "#555"
      });
      $("#main").fadeOut(function() {
        $("#"+target).show();
        $("#content").fadeIn();
      });
      $("#main_bar").animate({
        top: 0,
        height: 50,
        fontSize: 24
      }, time);
      $("#main_bar").css("backgroundImage", $("#gradient").css("backgroundImage"))
      $(".big_head").fadeOut(function() {
        $(".small_head").fadeIn();
      })
    }
    else if (view != target){
      $(".stuff").fadeOut("fast", function() {
        setTimeout(function() {
          $("#"+target).fadeIn("fast");
        }, 200);
      });
    }
  }
  return target;
}