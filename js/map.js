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
    // Import From External Data
    var request = new XMLHttpRequest();
    request.open('get', 'https://api.kcg.gov.tw/api/service/get/35d9da28-b6be-4815-b49a-51fc076a868e', true);
    request.setRequestHeader('Content-type', 'application/json');
    request.send(null);
    request.onload = function () {
        var callBackData = JSON.parse(request.response);
        if (request.readyState == 4 && request.status == 200) {
            map = new google.maps.Map(document.getElementById('map'), {
                center: {
                    lat: 23.271811,
                    lng: 120.717478,
                },
                zoom: 10,
                // Map Style
                // Fast Coustom Style By https://mapstyle.withgoogle.com/
                // Get Special Style From https://snazzymaps.com/
                styles: [{
                        "featureType": "all",
                        "elementType": "all",
                        "stylers": [{
                            "visibility": "on"
                        }]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels",
                        "stylers": [{
                                "visibility": "off"
                            },
                            {
                                "saturation": "-100"
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                                "saturation": 36
                            },
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 40
                            },
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text.stroke",
                        "stylers": [{
                                "visibility": "off"
                            },
                            {
                                "color": "#000000"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.fill",
                        "stylers": [{
                                "color": "#000000"
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                                "color": "#000000"
                            },
                            {
                                "lightness": 17
                            },
                            {
                                "weight": 1.2
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#000000"
                            },
                            {
                                "lightness": 20
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#4d6059"
                        }]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                            "color": "#4d6059"
                        }]
                    },
                    {
                        "featureType": "landscape.natural",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#4d6059"
                        }]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [{
                            "lightness": 21
                        }]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#4d6059"
                        }]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                            "color": "#4d6059"
                        }]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [{
                                "visibility": "on"
                            },
                            {
                                "color": "#7f8d89"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#7f8d89"
                        }]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [{
                                "color": "#7f8d89"
                            },
                            {
                                "lightness": 17
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                                "color": "#7f8d89"
                            },
                            {
                                "lightness": 29
                            },
                            {
                                "weight": 0.2
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#000000"
                            },
                            {
                                "lightness": 18
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#7f8d89"
                        }]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                            "color": "#7f8d89"
                        }]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#000000"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#7f8d89"
                        }]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                            "color": "#7f8d89"
                        }]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#000000"
                            },
                            {
                                "lightness": 19
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [{
                                "color": "#2b3638"
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [{
                                "color": "#2b3638"
                            },
                            {
                                "lightness": 17
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#24282b"
                        }]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                            "color": "#24282b"
                        }]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.stroke",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    }
                ],
            });
            markerLocation = callBackData.data;
            for (var i = 0; i < markerLocation.length; i = i + 1) {
                var singleMarker = {};
                var singlePosition = {};
                var singleTitle = '';

                singlePosition.lat = parseFloat(markerLocation[i].latitude);
                singlePosition.lng = parseFloat(markerLocation[i].longitude);
                singleTitle = markerLocation[i].r_Title;

                singleMarker.position = singlePosition;
                singleMarker.map = map;
                singleMarker.title = singleTitle;
                singleMarker.icon = 'http://downloadicons.net/sites/default/files/dr-evil-icon-557361.png';

                new google.maps.Marker(singleMarker);
            }
        } else {
            alert('Data Load Failed.');
        }
    }
}