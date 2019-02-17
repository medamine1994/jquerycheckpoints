$(document).ready(function(){
  $(".waw").click(function(){
    console.log($(".hey").css("color"))
  if( $(".hey").css("color")=="rgb(0, 0, 0)")
    $(".hey").css("color","red");
   
   else{
    $(".hey").css("color","rgb(0, 0, 0)");
    }
   
  });
});

$(document).ready(function(){
  $(".red").click(function(){
  if( $(".hey").css("fontWeight")=="400")
    $(".hey").css("fontWeight","1000");
   else{
    $(".hey").css("fontWeight","400");
    }
  });


});
$(document).ready(function(){
  $(".vert").click(function(){
  if( $(".hey").css("fontStyle")=="normal")
    $(".hey").css("fontStyle","italic");
   else{
    $(".hey").css("fontStyle","normal");
    }
  });
});

$(document).ready(function(){
  $(".yellow").click(function(){
    console.log($(".hey").css("textDecoration"))
  if( $(".hey").css("textDecoration")=="none solid rgb(0, 0, 0)")

      $(".hey").css("textDecoration","underline");
     else{
    $(".hey").css("textDecoration","none solid rgb(0, 0, 0)");
    }
  });
  
});
 
        
$('#Fonts').on('change', function() {
  $(".hey").css('font-size',$('#Fonts option:selected').val());
});
$('#Fonts1').on('change', function() {
  $(".hey").css('font-family',$('#Fonts1 option:selected').val());
});