
function initMap(){

    // Map
    const origin = { lat: 52.51359401929304, lng: 13.31516720471653 };
    const map = new google.maps.Map(document.getElementById('map'), {
       center: origin,
        zoom: 12    ,
        mapId: 'a3a5790156aa9070',
        mapTypeControl: false,
        streetViewControl: false,
        });
        var placesService = new google.maps.places.PlacesService(map);

        map.addListener('click', function(event) {
            if (event.placeId) {
              event.stop();
              placesService.getDetails({placeId: event.placeId}, function(place, status) {
                  var content = '<div>'+
                    '<div >'+
                    '</div>'+
                    '<h2 class="firstHeading">' + place.name + '</h2>'+
                    '<div">'+
                    '<p>' + place.formatted_address + '</p>'+
                    '<p>' + place.formatted_phone_number + '</p>'+
                    '<p><a href="' + place.website + '">' + place.website + '</a></p>';
                    for (var i = 0; i < 3; i++) {
                      content += '<img src="' + place.photos[i].getUrl({maxHeight: 50}) + '">';
                    }
                    content += '</div></div>';

                  var infoWindow = new google.maps.InfoWindow({
                      maxWidth: 300,
                      content: content,
                      position: event.latLng
                  });
                  infoWindow.open(map);
              });
            }
        });

    // Markers  
    const markers = [
        // StayUrban
        [
            52.51359401929304,                  // lat [0]
            13.31516720471653,                  // lng [1]
            'map-uploads/Stay Urban.png',       // URI [2]
            82.5,                                // x - anchor [3]
            75,                                 // y - anchor [4]
            165,                             // x - scaledSize [5]
            75,                              // y- scaledSize [6]
            1,                                  // zIndex [7]
            '<div>' +                           // InfoWindow  [8]
            '<h1>' + 'Stayurban' + '</h1>'+
            '<p> Leibnizstrasse 3-4 0625 Berlin, Germany<br/>' +
            '<p> +49(0)341393784184</p>'+
            '<p><a href="https://stayurban.de"> stayurban.de </a></p>' +
            '<div> <img src="map-uploads/exterior.jpg" alt="exterior" height="80"> <img src="map-uploads/apartment1.jpg" alt="apartment1" height="80"><img src="map-uploads/apartment2.jpg" alt="apartment2" height="80"></div>' +
            '<a href="https://goo.gl/maps/rdH9zDgTMdDi6qMi7" target="_blank" rel="noreferrer noopener">' +
            '<button style="color:#f5f1e8" class="btn-map">' +
            'ROUTE' + 
            '</button>' +
            '</a>' +
            "</div>",
        ]
    ];

    for (let i = 0; i < markers.length; i++) {
        const currMarker = markers[i];
        const marker = new google.maps.Marker({
            position: { lat: currMarker[0], lng: currMarker[1] },
            map: map,
            icon: {
                url : currMarker[2],
                anchor: new google.maps.Point(currMarker[3], currMarker[4]),
                scaledSize: new google.maps.Size(currMarker[5],currMarker[6]),
            },
            animation: google.maps.Animation.DROP,
            zIndex: currMarker[7],
        });
        
        const infowindow = new google.maps.InfoWindow({
            content: currMarker[8]
        });

        marker.addListener("click", () => {
            infowindow.open(map, marker);
            });
    }
}


