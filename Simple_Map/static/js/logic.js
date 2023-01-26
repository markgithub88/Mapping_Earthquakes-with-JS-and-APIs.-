
// TILE LAYER

console.log("working");
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437], 14);
L.circleMarker([34.0522, -118.2437], {
    radius: 50,
    color: "black",
    fillcolor: '#ffffa1'
}).addTo(map);

// add LA marker
L.circle([34.0522, -118.2437], {
    radius: 30
 }).addTo(map);


// We create the tile layer that will be the background of our map.

// let marker = L.marker([34.0522, -118.2437]).addTo(map);

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "dark-v10",
    accessToken: API_KEY
});
streets.addTo(map)


