$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: false,
    autoplay: true,
    smartSpeed: 2200,
    navText: [' <i class="fas fa-caret-left" style="font-size:36px"></i>', ' <i class="fas fa-caret-right" style="font-size:36px"></i>'],
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});


// navbar

var togglebtn = $('#togglebtn');
var dropdown = $('#dropdown');

togglebtn.on('click', function () {
    dropdown.fadeToggle();

});

// Animation
AOS.init({
    duration: 1500,
})

//  dropdown effect

$("#dropdown a").on('click', function () {
    $('#dropdown').hide(1000);


})

// hide and show

$(document).ready(function () {
    $("#flip").click(function () {
        $("#panel").slideToggle("slow");
        $(this).hide();
    });
});


// fade n show
$(document).ready(function () {
    $(".applybtn").click(function () {
        console.log('click');
        $(".div1").hide();
        $(".applybtn").show();
        $(this).next().fadeIn(2000);
        $(this).hide();

    });
});



// // color change for navbar
// $(function () {
//     //caches a jQuery object containing the header element
//     var header = $("#header");
//     $(window).scroll(function () {
//         var scroll = $(window).scrollTop();

//         if (scroll >= 400) {
//             header.removeClass('clearHeader ').addClass("fixedHeader");
//         } else {
//             header.removeClass("fixedHeader").addClass('clearHeader');
//         }
//     });
// // })