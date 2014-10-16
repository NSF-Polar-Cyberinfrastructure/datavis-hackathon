var map = L.map('map',{
        center: new L.LatLng(40.735522, -73.997102),
        zoom: 14,
        scrollWheelZoom: false
        });

L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
        maxZoom: 22,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        id: 'examples.map-i875mjb7',
}).addTo(map);

L.marker([40.745614, -73.992231]).addTo(map)
        .bindPopup("<b> [HOTEL] Holiday Inn Manhattan Chelsea: rates: $289.00 - $309.00: contact 212-430-8500 - callers must advise they are with the New School and request the New School corporate rate: http://www.hidowntown-nyc.com/").openPopup();
L.marker([40.739726, -73.982344]).addTo(map)
        .bindPopup("<b> [HOTEL] Marcel at Gramercy: rates: $329.00: contact 1-888-664-6835 - callers must advise they are with the New School and request the New School corporate rate: http://www.hotelmarcelnewyork.com/").openPopup();
L.marker([40.732738, -73.998708]).addTo(map)
        .bindPopup("<b> [HOTEL] The Washington Square Hotel: rates: $263.00 - $361.00: contact 212-777-9515 - callers must advise they are with the New School and request the New School corporate rate: http://www.wshotel.com/").openPopup();
L.marker([40.735522, -73.997102]).addTo(map)
        .bindPopup("<b> [EVENT] Parsons The New School for Design: For hotel reservation questions please contact Katie Wanner wannk858@newschool.edu").openPopup();


var popup = L.popup();
