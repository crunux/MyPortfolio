$(document).ready( () => {
    
    // scroll and navbar script
    $(window).scroll( () => {
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky')
        }else{
            $('.navbar').removeClass('sticky')
        }
    });

    //toggle menu/navbar script

    $('.menu-btn').click( () => {
        $('.navbar .menu').toggleClass("active");
        $('.home .max-width').toggleClass("disable");
        $('.menu-btn i').toggleClass("active")
    });
})