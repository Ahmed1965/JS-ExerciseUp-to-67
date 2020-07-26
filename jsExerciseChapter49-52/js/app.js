$(".secondpart").hide();
$(".more").click(function () {
    if ($(this).hasClass("active")){
        $(this).html("Read More").removeClass("active");
        $(this).prev(".secondpart").slideUp();
    } else {
        $(this).html("Read Less").removeClass("active");
        $(this).prev(".secondpart").slideUp();
     }
    
}) 
