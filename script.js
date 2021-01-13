$(document).ready(function(){
    // utrzymuje belkę nawigacyjną zawsze na górze strony
    $(window).scroll(function(){
        // dodaje własność sticky do navbara
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky"); // sticky - pozycjonowany na podstawie tego, gdzie jest scroll
        }else{
            $('.navbar').removeClass("sticky");
        }

        //pokazuje przycisk przewijania na górę strony
        if(this.scrollY > 500){
            $('.scroll-up-button').addClass("show");
        }else{
            $('.scroll-up-button').removeClass("show");
        }
    });

    // przewija stronę na samą górę
    $('.scroll-up-button').click(function(){
        $('html').animate({scrollTop: 0});

    });


    // płynne przechodzenie pomiędzy sekcjami strony
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // menu mobilne
    $('.menu-button').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-button i').toggleClass("active");
    });

    // animacja wpisywania tekstu
    var typed = new Typed(".typing", {
        strings: ["Web Developerem", "Projektantem UX/UI", "Freelancerem"],
        typeSpeed: 70,
        backSpeed: 20,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Developerem", "Projektantem UX/UI", "Freelancerem"],
        typeSpeed: 70,
        backSpeed: 20,
        loop: true
    });

    // galeria obrazów z sekcji "referencje"
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{ items: 1, nav: false },
            600:{ items: 2,  nav: false },
            1000:{ items: 3, nav: false }
        }
    });
});