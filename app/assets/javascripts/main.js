$(document).ready(function() {

  var view = "home"
  $(".small_head ").hide();
  $("#content").hide();
  $(".stuff").hide();
  $("#main_bar").show(function() {
    $("#main_bar").animate({top: 567}, 1000);
  })

  $(".link").click(function() {
    target = $(this).attr("target");
    $(".selected").removeClass("selected");
    $(".link[target="+target+"]").addClass("selected")
    console.log($(".link[target="+target+"]"))
    view = animate(target, view)
  })
})

function animate(target, view) {
  if(target == "about" || target == "team" || target == "media") {
    if(view == "home") {
      $("body").css({
        backgroundColor: "#323232"
      });
      $("#main").fadeOut(function() {
        $("#"+target).show();
        $("#content").fadeIn();
      });
      $("#main_bar").animate({
        top: 0,
        height: 50,
        fontSize: 24
      }, 1000, function() {
        console.log("done")
      });
      $(".big_head").fadeOut(function() {
        $(".small_head").fadeIn();
      })
    }
    else if (view != target){
      $(".stuff").fadeOut("fast", function() {
        setTimeout(function() {
          $("#"+target).fadeIn();
        }, 200);
      });
    }
  }
  return target;
}