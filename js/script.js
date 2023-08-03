
$(document).ready(function(){
    $(".nav-toggler").each(function(_,navToggler){
        var target=$(navToggler).data("target");
        $(navToggler).on("click",function(){
            $(target).animate({
                height:"toggle",
            })
        });
    })
})

$(".scroll").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTo, p:$(this.hash).offset().top},
    600);
    close();
});



