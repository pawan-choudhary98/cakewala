// responsive navbar 

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


//goto button

var btn = document.getElementById('gotobtn');
var nav = document.getElementById('nav');
var navtext = document.getElementById('nav-text');
window.onscroll = function() {
    if (window.pageYOffset >= 400) {



        btn.style.display = 'block';


    } else {
        btn.style.display = 'none';



    }


};


//..........owlCarousel  slider for testimonial........
$('#slider').owlCarousel({
    loop: true,


    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {

            margin: 50,
            items: 1,

        },
        600: {

            items: 1,

        },
        900: {

            items: 2
        },
        1000: {
            items: 2,


        }
    }
});
//..........owlCarousel  slider for photo gallray........
$('#slider-photo').owlCarousel({
    loop: true,

    dot: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {


            items: 2,

        },
        600: {

            items: 3,

        },
        900: {

            items: 4,

        },
        1000: {

            items: 5,

        }
    }
});



AOS.init({
    duration: 1200,

});