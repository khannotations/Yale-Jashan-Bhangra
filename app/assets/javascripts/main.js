$(document).ready(function() {

  var view = "home";
  $(".small_head ").hide();
  $("#content").hide();
  $(".stuff").hide();

  $(".link").click(function() {
    target = $(this).attr("target");
    $(".selected").removeClass("selected");
    $(".link[target="+target+"]").addClass("selected");
    console.log($(".link[target="+target+"]"));
    view = animate(target, view);
  });

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
    };
  })();
  var mborder = $("#m-first").css("border");
  $(".mailing>input").focus(function() {
    $(this).css("border", mborder);
  });

  $("#m-first").keyup(function() {
    $(this).attr("placeholder", "First");
    $("#m-email").val($("#m-first").val().toLowerCase() + "." + $("#m-last").val().toLowerCase() +"@yale.edu");
  });
  $("#m-last").keyup(function() {
    $(this).attr("placeholder", "Last");

    $("#m-email").val($("#m-first").val().toLowerCase() + "." + $("#m-last").val().toLowerCase() +"@yale.edu");
  });

  $("#m-first").blur(function() {
    if($(this).val() === "") {
      $("#m-email").val("");
    }
  });
  $("#m-last").blur(function() {
    if($(this).val() === "") {
      $("#m-email").val("");
    }
  });
  $("#m-submit").click(function() { submit_mailing(); });
  $("#m-email").keypress(function(e) {
    if(e.which === 13) submit_mailing();
  });
  $("#m-last").keypress(function(e) {
    if(e.which === 13) submit_mailing();
  });
});

function submit_mailing() {
  var first = $("#m-first").val();
  var last = $("#m-last").val();
  var email = $("#m-email").val();
  var good = true;
  if(first === "")
    $("#m-first").css("border", "1pt solid red").val("").attr("placeholder", "A valid first name, please!").focus();
  else if(last === "")
    $("#m-last").css("border", "1pt solid red").val("A last name, please!").select();
  else if(!email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i))
    $("#m-email").css("border", "1pt solid red").val("A valid email, please!").select();
  else {
    $("#m").css("opacity", "0.3");
    setTimeout(function() {
      $("#m").fadeOut("fast", function() {
      $("#m").css("opacity", "1");

        $(this).html("<h3>Great, you're in!</h3>").fadeIn("fast");
      });

    }, 2000);
  }


}

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
      $("#main_bar").css("backgroundImage", $("#gradient").css("backgroundImage"));
      $(".big_head").fadeOut(function() {
        $(".small_head").fadeIn();
      });
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