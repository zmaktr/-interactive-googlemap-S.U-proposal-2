
function initMap(){

    // Map
    const map = new google.maps.Map(document.getElementById('map'), {
       center: { lat: 52.51359401929304, lng: 13.31516720471653 },
        zoom: 13,
        mapId: 'db46cc0368eab8f9',
        mapTypeControl: false,
        streetViewControl: false,
        });

    // Markers  
    const markers = [
        // StayUrban
        [
            52.51359401929304,                  // lat [0]
            13.31516720471653,                  // lng [1]
            'map-uploads/Stay Urban.png',       // URI [2]
            78,                                 // x - anchor [3]
            110,                                // y - anchor [4]
            155,                                // x - scaledSize [5]
            110,                                // y- scaledSize [6]
            1,                                  // zIndex [7]
            '<div>' +                           // InfoWindow  [8]
            '<p> Leibnizstrasse 3-4 <br/>' +
            '10625 Berlin, Germany </p>'+ 
            '<a href="https://goo.gl/maps/rdH9zDgTMdDi6qMi7" target="_blank" rel="noreferrer noopener">' +
            '<button style="color:#f5f1e8" class="btn-map">' +
            'ROUTE' + 
            '</button>' +
            '</a>' +
            "</div>",
        ],
        // TU Berlin
        [
            52.51655515035668,                  // lat [0]
            13.323722701289036,                 // lng [1]
            "map-uploads/TU Berlin.png",                    // URI [2]
            0,                                  // x - anchor [3]
            32,                                 // y - anchor [4]
            120,                                // x - scaledSize [5]
            32,                                 // y- scaledSize [6]
            0,                                  // zIndex [7]
            '<div>' +                           // InfoWindow  [8]
            '<p> MAR Gebäude, Marchstraße 23, <br/>' +
            '10587 Berlin, Germany </p>'+ 
            "</div>",
        ],
        // Burgeramt
        [
            52.489461946879395,                 // lat [0]
            13.31224367139423,                  // lng [1]
            'map-uploads/Bürgeramt Hohenzollerndamm.png',   // URI [2]
            56.5,                               // x - anchor [3]
            38,                                 // y - anchor [4]
            147,                                // x - scaledSize [5]
            50,                                 // y- scaledSize [6]
            0,                                  // zIndex [7]
            '<div>' +                           // InfoWindow  [8]
            '<p> Hohenzollerndamm 177, <br/>' +
            '10713 Berlin, Germany</p>'+ 
            "</div>",
        ],
        // Siemens AG
        [
            52.530733680948984,                 // lat [0]
            13.270010484837519,                 // lng [1]
            'map-uploads/Siemens AG.png',                   // URI [2]
            113,                                // x - anchor [3]
            0,                                  // y - anchor [4]
            113,                                // x - scaledSize [5]
            38,                                 // y- scaledSize [6]
            0,                                  // zIndex [7]
            '<div>' +                           // InfoWindow  [8]
            '<p> Nonnendammallee 104, <br/>' +
            '13629 Berlin, Germany </p>'+ 
            "</div>",
        ],
        // Deloitte
        [
            52.5046429615231,                   // lat [0]
            13.329935059999778,                 // lng [1]
            'map-uploads/Deloitte.png',                     // URI [2]
            98,                                 // x - anchor [3]
            0,                                  // y - anchor [4]
            98,                                 // x - scaledSize [5]
            30,                                 // y- scaledSize [6]
            0,                                  // zIndex [7]
            '<div>' +                           // InfoWindow  [8]
            '<p> Kurfürstendamm 23, <br/>' +
            '10719 Berlin, Germany </p>'+ 
            "</div>",
        ],
        // Deutsche Oper
        [
            52.51200613537274,                  // lat [0]
            13.308397909922746,                 // lng [1]
            'map-uploads/Deutsche Oper.png',                // URI [2]
            140,                                // x - anchor [3]
            0,                                  // y - anchor [4]
            140,                                // x - scaledSize [5]
            30,                                 // y- scaledSize [6]
            0,                                  // zIndex [7]
            '<div>' +                           // InfoWindow  [8]
            '<p> Bismarckstraße 35, <br/>' +
            '10627 Berlin, Germany </p>'+ 
            "</div>",
        ],
        // Taylor Wessing
        [
            52.511045864602266,                 // lat [0]
            13.377176857592548,                 // lng [1]
            'map-uploads/Taylor Wessing.png',               // URI [2]
            140,                                // x - anchor [3]
            0,                                  // y - anchor [4]
            140,                                // x - scaledSize [5]
            30,                                 // y- scaledSize [6]
            0,                                  // zIndex [7]
            '<div>' +                           // InfoWindow  [8]
            '<p> Ebertstraße 15, <br/>' +
            '10117 Berlin, Germany </p>'+ 
            "</div>",
        ],
        // Sony Europe
        [
            52.51076480244041,                  // lat [0]
            13.372345936394833,                 // lng [1]
            'map-uploads/Sony Europe.png',                  // URI [2]
            140,                                // x - anchor [3]
            33,                                 // y - anchor [4]
            140,                                // x - scaledSize [5]
            33,                                 // y- scaledSize [6]
            0,                                  // zIndex [7]
            '<div>' +                           // InfoWindow  [8]
            '<p> Kemperpl. 1, <br/>' +
            '10785 Berlin, Germany </p>'+ 
            "</div>",
        ],
        // SpreeBogan
        [
            52.525032809061344,                 // lat [0]
            13.346730586788718,                 // lng [1]
            'map-uploads/Spree-Bogen.png',                  // URI [2]
            0,                                  // x - anchor [3]
            12,                                 // y - anchor [4]
            136,                                // x - scaledSize [5]
            24,                                 // y- scaledSize [6]
            0,                                  // zIndex [7]
            '<div>' +                           // InfoWindow  [8]
            '<p> Kemperpl. 1, <br/>' +
            '<p> Alt-Moabit, <br/>' +
            '10557 Berlin, Germany </p>' +
            "</div>",
        ],
        // 5Km
        [
            52.53029422633741,                  // lat [0]
            13.383679644036834,                 // lng [1]
            'map-uploads/5km radius.png',                   // URI [2]
            6,                                  // x - anchor [3]
            15,                                 // y - anchor [4]
            75,                                 // x - scaledSize [5]
            30,                                 // y- scaledSize [6]
            0,                                  // zIndex [7]
            '<div>' +                           // InfoWindow  [8]
            '<p>5Km radius </p>' +
            '</div>'
        ],
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

    // 5KM Ring
    const locationCircle = new google.maps.Circle({
        strokeColor: "#ab9057",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#e8ebed",
        fillOpacity: 0.35,
        map: map,
        center: { lat: 52.51359401929304, lng: 13.31516720471653 },
        radius: 5000,
      });
}


