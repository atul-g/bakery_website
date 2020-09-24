
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



/**
 * JS Implementation of MODAL
 * 
 * 

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
 */