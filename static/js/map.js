var hotelIcon = L.icon({
    iconUrl: 'static/img/hotel.png',

    iconSize:     [25, 30], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var parkingIcon = L.icon({
    iconUrl: 'static/img/parking.png',

    iconSize:     [25, 30], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var map = L.map('map',{
        center: new L.LatLng(40.735522, -73.997102),
        zoom: 14,
        scrollWheelZoom: false
        });

L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
        maxZoom: 22,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery � <a href="http://mapbox.com">Mapbox</a>',
        id: 'examples.map-i875mjb7',
}).addTo(map);

L.marker([40.737257, -73.999952], {icon: parkingIcon}).addTo(map)
        .bindPopup("<b>Quick Park - 175 W 12th St, (646) 336-6225").openPopup();
L.marker([40.737987, -73.995353], {icon: parkingIcon}).addTo(map)
        .bindPopup("<b>Icon Parking - Union Square, Flatiron, 65 W 15th St, (212) 366-4632").openPopup();
L.marker([40.735843, -73.995481], {icon: parkingIcon}).addTo(map)
        .bindPopup("<b>Central Parking - Greenwich Village, Union Square, 20 W 13th St (800) 836-6666 ").openPopup();
L.marker([40.745614, -73.992231], {icon: hotelIcon}).addTo(map)
        .bindPopup("<b>Holiday Inn Manhattan Chelsea: rates: $289.00 - $309.00: contact 212-430-8500 - callers must advise they are with the New School and request the New School corporate rate: http://www.hidowntown-nyc.com/").openPopup();
L.marker([40.739726, -73.982344], {icon: hotelIcon}).addTo(map)
        .bindPopup("<b>Marcel at Gramercy: rates: $329.00: contact 1-888-664-6835 - callers must advise they are with the New School and request the New School corporate rate: http://www.hotelmarcelnewyork.com/").openPopup();
L.marker([40.732738, -73.998708], {icon: hotelIcon}).addTo(map)
        .bindPopup("<b>The Washington Square Hotel: rates: $263.00 - $361.00: contact 212-777-9515 - callers must advise they are with the New School and request the New School corporate rate: http://www.wshotel.com/").openPopup();
L.marker([40.735522, -73.997102]).addTo(map)
        .bindPopup("<b> [EVENT] Parsons The New School for Design: For hotel reservation questions please contact Katie Wanner wannk858@newschool.edu").openPopup();


var popup = L.popup();
