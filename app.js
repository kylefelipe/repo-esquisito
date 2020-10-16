const centerCoord = [37.7749, -122.4194]

const myMap = L.map('mapid', {
  center: centerCoord,
  zoom: 13
})

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', { 
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18, 
id: 'mapbox/streets-v11', 
accessToken: 'pk.eyJ1Ijoia3lsZWZlbGlwZSIsImEiOiJja2dicDJ3ODgwajVqMnh0ajNuYWNndHQzIn0.9VVmCAO-vNhPc0_T1DC8Zg' }).addTo(myMap);

const marker = L.marker(centerCoord).addTo(myMap);

const circle = L.circle(centerCoord, {
  color: 'gold', 
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 200,
}).addTo(myMap);

circle.bindPopup("I am ponting to somwhere!");
marker.bindPopup("I am pointing to another place");
