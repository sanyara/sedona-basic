var center = {lat: 34.73442176, lng: -111.85849326};
function initMap() {  
    var map = new google.maps.Map(document.getElementById('map'), {
        center: center,
        scrollwheel: false,
        zoom: 9,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT
        }

    });
    var marker = new google.maps.Marker({
        position: {lat: 34.8697395, lng: -111.7609896},
        map: map,
        title: 'Hello World!'
    });
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}




var link = document.querySelector(".booking-form-header");
var BookingForm = document.querySelector(".hotel-booking-form");
var overlay = document.createElement("div");
var parentElem = document.body;
var hotelInField = BookingForm.querySelector("[name='hotel-in']");
var hotelOutField = BookingForm.querySelector("[name='hotel-out']");

overlay.className = "overlay-form";
parentElem.appendChild(overlay);




link.addEventListener("click", function(event) {
	event.preventDefault();
	BookingForm.classList.add("form-visible");
	overlay.classList.add("overlay-visible");
	hotelInField.focus();
	link.scrollIntoView();
});

overlay.addEventListener("click", function(event) {
	BookingForm.classList.remove("form-visible");
	overlay.classList.remove("overlay-visible");
	BookingForm.classList.remove("form-error");
	
});
window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (BookingForm.classList.contains("form-visible")) {
        BookingForm.classList.remove("form-visible");
		overlay.classList.remove("overlay-visible");
		BookingForm.classList.remove("form-error");
      }
    }
});

BookingForm.addEventListener("submit", function(event) {
    if (!hotelInField.value || !hotelOutField.value) {
		BookingForm.classList.add("form-error");
        event.preventDefault();
        console.log("Нужно ввести логин и пароль"); 
    }else {
		BookingForm.classList.remove("form-visible");
		overlay.classList.remove("overlay-visible");
	}
});

