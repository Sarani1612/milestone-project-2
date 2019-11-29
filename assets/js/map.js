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
    const paris = [
        {name: 'Senat', lat: 48.849111, lng: 2.339784},
        {name: 'Epidon', lat: 48.850865, lng: 2.339383},
        {name: 'Odéon', lat: 48.849493, lng: 2.338734}
    ];
    // Location of places in London
    const london = [
        {name: 'Courthouse Hotel', lat: 51.514351, lng: -0.139485},
        {name: 'Mew of Mayfair Brasserie', lat: 51.512698, lng: -0.145551},
        {name: 'London Palladium', lat: 51.514600, lng: -0.140465}
    ]
    // Location of places in Prague
    const prague = [
        {name: 'Hotel Leonardo', lat: 50.083632, lng: 14.414274},
        {name: 'Restaurant Parnas', lat: 50.081683, lng: 14.413252},
        {name: 'National Theatre', lat: 50.080980, lng: 14.413598}
    ]
    // Location of places in Vienaa
    const vienna = [
        {name: 'Hotel Josefshof am Rathaus', lat: 48.208602, lng: 16.354076},
        {name: 'Fromme Helene', lat: 48.209242, lng: 16.352121},
        {name: 'Vienna Operahouse', lat: 48.202961, lng: 16.368914}
    ]
    // Location of places in Athens
    const athens = [
        {name: 'Fresh Hotel', lat: 37.981244, lng: 23.726716},
        {name: 'Kuzina', lat: 37.976413, lng: 23.722061},
        {name: 'National Theatre of Athens', lat: 37.984969, lng: 23.725248}
    ]
    // Location of places in Rome
    const rome = [
        {name: 'Rome Times Hotel', lat: 41.898567, lng: 12.490433},
        {name: 'Il Nido dell Pettirosso', lat: 41.899409, lng: 12.493029},
        {name: "Teatro dell'Opera", lat: 41.900876, lng: 12.495336}
    ]
    // Location of places in Stockholm
    const stockholm = [
        {name: 'Nobis Hotel', lat: 59.333451, lng: 18.073844},
        {name: 'Restaurang Prinsen', lat: 59.334417, lng: 18.073255},
        {name: 'Royal Swedish Opera', lat: 59.329867, lng: 18.070386}
    ]
    // Location of places in Dublin
    const dublin = [
        {name: 'Brooks Hotel', lat: 53.341536, lng: -6.263617},
        {name: 'The Oak', lat: 53.344360, lng: -6.267133},
        {name: 'Olympia Theatre', lat: 53.344304, lng: -6.266082}
    ]
    // Location of places in Helsinki
    const helsinki = [
        {name: 'Clarion Hotel', lat: 60.159933, lng: 24.922068},
        {name: 'Restaurant Natura', lat: 60.163663, lng: 24.942200},
        {name: 'Alexander Theatre', lat: 60.163432, lng: 24.933357}
    ]

    // Map centered on hotels in each city
    var mapParis = new google.maps.Map(document.getElementById('map-paris'), {zoom: 15, center: paris[0]});
    var mapLondon = new google.maps.Map(document.getElementById('map-london'), {zoom: 15, center: london[0]});
    var mapPrague = new google.maps.Map(document.getElementById('map-prague'), {zoom: 15, center: prague[0]});
    var mapVienna = new google.maps.Map(document.getElementById('map-vienna'), {zoom: 14, center: vienna[0]});
    var mapAthens = new google.maps.Map(document.getElementById('map-athens'), {zoom: 15, center: athens[0]});
    var mapRome = new google.maps.Map(document.getElementById('map-rome'), {zoom: 15, center: rome[0]});
    var mapStockholm = new google.maps.Map(document.getElementById('map-stockholm'), {zoom: 15, center: stockholm[0]});
    var mapDublin = new google.maps.Map(document.getElementById('map-dublin'), {zoom: 15, center: dublin[0]});
    var mapHelsinki = new google.maps.Map(document.getElementById('map-helsinki'), {zoom: 14, center: helsinki[0]});

    function mapMarkers(city, map) {
        for(var i = 0; i < city.length; i++){
            var pins = city[i];
            var marker = new google.maps.Marker({
            position: pins,
            map: map,
            animation: google.maps.Animation.DROP,
            title: pins.name
            });
        }
        
    };
        
    mapMarkers(paris, mapParis);
    mapMarkers(london, mapLondon);
    mapMarkers(prague, mapPrague);
    mapMarkers(vienna, mapVienna);
    mapMarkers(athens, mapAthens);
    mapMarkers(rome, mapRome);
    mapMarkers(stockholm, mapStockholm);
    mapMarkers(dublin, mapDublin);
    mapMarkers(helsinki, mapHelsinki);

}