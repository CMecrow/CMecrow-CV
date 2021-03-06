function initMap () {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 46.619261,
            lng: -33.134766,
        }
    });

var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var locations = [
    { lat: 54.998380, lng: -1.717304 }            
];

var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
    });
});

var markerCluster = new MarkerClusterer(map, markers,
{imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}