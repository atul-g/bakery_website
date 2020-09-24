
// dynamically changing copyright year 
currentYear = new Date().getFullYear();
document.getElementsByClassName('footer-copyright')[0].innerText =  "© " + currentYear + " Copyright: Whisked"

$(document).scroll(function() {
    var  y = $(this).scrollTop();
    console.log(y);

    //if(y > 400) {
    //    var display = $("#intro-section").css('display');
    //    $("#intro-section").fadeOut(500, function() {
    //        $("#intro-section").css('visibility', 'hidden');
    //        $("#intro-section").css('display', display);
    //    });
    //}
    //else {
    //    var display = $("#intro-section").css('display');
    //    $("#intro-section").fadeIn(500, function() {
    //        $("#intro-section").css('visibility', 'hidden');
    //        $("#intro-section").css('display', display);
    //    });
    //}
    //    if(y > 600) {
    //        $('.intro-para').fadeOut()
    //    }
    //    else {
    //        $('#intro-section').fadeIn()
    //    }

});

