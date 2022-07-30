$(document).ready(function(){
    main_scripts.init();
});

var main_scripts = {
    init: function(){
        new WOW().init();
        $('.testimonials-items-holder').slick();
        // $('.recent-work .cards-holder').slick();

        $(window).scroll(function(){
            let scroll = $(window).scrollTop();
            if(scroll > 100){
                $('.main-navbar').addClass("active")
            } else {
                $('.main-navbar').removeClass("active")
            }
        });

        $(document).on('click', '.main-navbar .hamburger-icon', function(){
            $("body").addClass('show-menu');
        })
        $(document).on('click', '.main-navbar .close-icon', function(){
            $("body").removeClass('show-menu');
        })

        this.bindings();
    },
}
