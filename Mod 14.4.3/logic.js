// Create a map object
var myMap = L.map("map", {
  center: [37.6214, -122.3790],
  zoom: 5
});

// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/satellite-streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
// for (var i = 0; i < cities.length; i++) {
//   var city = cities[i];
//   L.marker(city.location)
//     .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Population " + city.population + "</h3>")
//     .addTo(myMap);
// }

// Bonus
// User forEach to Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
// Loop through the cities array and create one marker for each city.



// cityData.forEach(function(city) {
//   console.log(city)
//   L.marker(city.location).addTo(myMap);
// });

// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//   console.log(city)
//   L.circleMarker(city.location,{
//     radius: city.population/100000,
//     color: "orange"
//   })
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population + "</h3>")
// .addTo(myMap);
// });

// Coordinates for each point to be used in the line.
let line = [
  [37.6214, -122.3790],
  [30.1975, -97.6664],
  [43.6777, -79.6248],
  [40.6413, -73.7781],
 
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue", dashArray: '5, 5', dashOffset: '0'
}).addTo(myMap);



































