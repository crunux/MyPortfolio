// const btn = document.getElementById("contavar
// btn.addEventListener('click', (e) => {
//     e.preventDefault()
    
// })

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

    $('.submit').on('click', (event) => {
        event.preventDefault();
        
        var name = $('#name').val();
        var subject = $('#subject').val();
        var email = $('#email').val();
        var message = $('#message').val();
        var body = `<h4>${name}</h4><br/> <h5>Email: ${email} - Subject: ${subject}</h5> <br/> <p>${message}</p>`
        if(name != ''){
            Email.send({
                SecureToken : "18cfce31-d3b3-4deb-b243-028aec3c179b",
                To : `joancruz0502@hotmail.com`,
                From : `joancruz0502@gmail.com`,
                Subject : `Contact Message`,
                Body : body
            }).then(
            message => alert(message)
            );
        }
        
        
    })


})





//f54da20d-daff-4e9b-af69-194960e3b519 hotmail email token
