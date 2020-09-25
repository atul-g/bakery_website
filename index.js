
// dynamically changing copyright year 
currentYear = new Date().getFullYear();
document.getElementsByClassName('footer-copyright')[0].innerText =  "© " + currentYear + " Copyright: Whisked"


const $introSection = $("#intro-section");
let introVisible = $introSection.is(":visible");

const $featuresSection = $("#features-section");
let featuresVisible = $featuresSection.is(":visible");

const $section3 = $("#section-3");
let section3Visible = $section3.is(":visible");


$(document).scroll(function() {
    const y = $(this).scrollTop();
    console.log(y);

    if (!(y <= 400 == introVisible))  { //this also means:  if not (y <= 400 && introVisible || y > 400 && !introVisible) return;

        introVisible = !introVisible;
        const opacity = +introVisible;
        $introSection.fadeTo(400, opacity);
    }


    if (!(y > 400 == featuresVisible))  { 

        featuresVisible = !featuresVisible;
        const opacity = +featuresVisible;
        $featuresSection.fadeTo(400, opacity);
    }

    if (!(y > 1200 == section3Visible))  { 

        section3Visible= !section3Visible;
        const opacity = +section3Visible;
        $section3.fadeTo(400, opacity);
    }
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
