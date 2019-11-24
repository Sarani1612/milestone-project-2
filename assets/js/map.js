window.onload = function(){ 

//Loop for opening modals

    var cityDiv = document.getElementsByClassName('city-div');

    for (var i = 0; i < cityDiv.length; i++) {
        var thisCityDiv = cityDiv[i];
        thisCityDiv.addEventListener('click', function(){
            var modal = document.getElementById(this.dataset.modal);
            $(modal).show();
        }, false);

    }

// event for closing modals when clicking outside of it

    window.onclick = function(event) {
        if (event.target.className == 'modal') {
            $('.modal').hide();
        }
    }

};

// Initializing map
function initMap() {
    // Location of places in Paris
    var senat = {lat: 48.849111, lng: 2.339784};
    var epidon = {lat: 48.850865, lng: 2.339383};
    var odeon = {lat: 48.849493, lng: 2.338734};

    // Location of places in London
    var courthouse = {lat: 51.514351, lng: -0.139485};
    var mayfair = {lat: 51.512698, lng: -0.145551};
    var palladium = {lat: 51.514600, lng: -0.140465};

    // Map centered on hotel in Paris
    var map = new google.maps.Map(
        document.getElementById('map-paris'), {zoom: 15, center: senat});
        // Markers for hotel, restaurant and theatre
        var marker0 = new google.maps.Marker({position: senat, map: map});
        var marker1 = new google.maps.Marker({position: epidon, map: map});
        var marker2 = new google.maps.Marker({position: odeon, map: map});

    // Map centered on hotel in London
    var mapLondon = new google.maps.Map(
        document.getElementById('map-london'), {zoom: 15, center: courthouse});
        // Markers for hotel, restaurant and theatre
        var marker0 = new google.maps.Marker({position: courthouse, map: mapLondon});
        var marker1 = new google.maps.Marker({position: mayfair, map: mapLondon});
        var marker2 = new google.maps.Marker({position: palladium, map: mapLondon});

}   

    
