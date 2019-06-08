var map;

function initMap() {
    // Generate Google Map
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 25.0673261,
            lng: 121.5252873,
        },
        zoom: 15
    });
    // Generate One Map Marker
    var marker = new google.maps.Marker({
        position: {
            lat: 25.062897,
            lng: 121.519329,
        },
        map: map,
        title: 'MRT',
    });
    // Generate Multi Map Marker
    var data = [{
            position: {
                lat: 25.062897,
                lng: 121.519329,
            },
            map: map,
            title: 'MRT',
        },
        {
            position: {
                lat: 25.062583,
                lng: 121.526486,
            },
            map: map,
            title: 'MRT',
        }
    ]
    for (var i = 0; i < data.length; i = i + 1) {
        var marker = new google.maps.Marker(data[i])
    }
}