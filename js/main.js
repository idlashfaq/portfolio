$(document).ready(function(){
    main_scripts.init();
});

var main_scripts = {
    init: function(){
        $('.testimonials-items-holder').slick();
        $('.recent-work .items-holder').slick();

        $(window).scroll(function(){
            let scroll = $(window).scrollTop();
            if(scroll > 100){
                $('.main-navbar').addClass("active")
            } else {
                $('.main-navbar').removeClass("active")
            }
        });
        this.bindings();
    },
}
