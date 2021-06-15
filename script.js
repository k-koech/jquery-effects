$(document).ready(function(){
      $(".col1").fadeIn("slow");
      $(".col2").fadeOut(3000);
      $(".col3").slideDown(2000);
      $(".col4").slideUp(2000);

      $("h3").click(function(){
        $(".headerP").toggle(1000);
        // $(".headerP").hide(2000);
      });
      

      $(".btn1").click(function(){
        $(".col5").fadeToggle(3000);
        $(".col6").slideToggle(2000);
      });
  });

// color modes
  $(document).ready(function() {
    $("#green").click(function() 
    {
        // if ($( "#foo" ).hasClass('className')) 
        // {
        //     $( "#foo" ).removeClass( 'className');
        // } 
        // else 
        // {
        //   $( "#foo" ).addClass( 'className');
        // }
      $("body").removeClass();
      $("body").addClass("green-background");
      $("body").css("color","#000");
    });

    $("#yellow").click(function() 
    {
      $("body").removeClass();
      $("body").addClass("yellow-background");
      $("body").css("color","#000");
    //   $("body").css("background-color", "#fff");
    });

    $("#red").click(function() 
    {
      $("body").removeClass();
      $("body").addClass("dark");
      $("body").css("color", "#FFF");
    });
  });
// PrePend
  $(document).ready(function() {
    $("button#hello").click(function() {
      $("ul").prepend("<h6>Hello!</h6>");
    });

    $("button#goodbye").click(function() {
      $("ul").append("<li>Goodbye!</li>");
    //   $("ul").after("<h4>Another aragraph!</h4>");
    });

    $("button#stop").click(function() {
      $("ul").prepend("<li>Stop copying me!</li>");
      $('li').addClass('green-background');
      $('li').click(function(){
        // alert("You clicked STOP!")
    });
    
$("ul").children("li").first().click(function() {
    alert('hi');
  });

    });
  });
       

  

// $(document).ready(function() {
//     $("button#hello").click(function() {
//       $("ul#user").prepend("<li>Hello!</li>");
//       $("ul#webpage").prepend("<li>Why hello there!</li>");
//     });

//     $("button#goodbye").click(function() {
//       $("ul#user").prepend("<li>Goodbye!</li>");
//       $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
//     });

//     $("button#stop").click(function() {
//       $("ul#user").prepend("<li>Stop copying me!</li>");
//       $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
//     });
//   });
