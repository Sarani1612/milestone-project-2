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
        var senat = {lat: 48.849, lng: 2.339};
        var epidon = {lat: 48.850, lng: 2.339};
        var odeon = {lat: 48.849493, lng: 2.338734};
        // Map centered on hotel
        var map = new google.maps.Map(
            document.getElementById('map-paris'), {zoom: 4, center: senat});
        // Markers for hotel, restaurant and theatre
        var marker = new google.maps.Marker({position: senat, map: map});
        var marker2 = new google.maps.Marker({position: epidon, map: map});
        var marker3 = new google.maps.Marker({position: odeon, map: map});
    }



