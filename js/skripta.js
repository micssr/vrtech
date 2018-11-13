$(document).ready(function(){

     $(".np1").click(function(){
        $(".np1, .np2, .np3").animate({opacity: '0'}, 500, 'swing', function(){
          $(".np1, .np2, .np3").hide();
          $(".forma").css("display", "block");
          $(".forma").animate({opacity: '1'}, 500, 'swing');
          $(".nazad").animate({opacity: '1'}, 500, 'swing');


     });
 });

      




 $(".nazad").click(function(){
   $(".forma").animate({opacity: '0'}, 500, 'swing', function(){
     $("forma").hide();
     $(".forma").css("display", "none");
     $(".np1, .np2, .np3").show();
     $(".np1, .np2, .np3").animate({opacity: '1'}, 500, 'swing');

 });

});
});
