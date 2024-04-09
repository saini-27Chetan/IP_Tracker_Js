// Script to display map and the location of the ip

// Initilizing a map
const map = L.map('map');

let marker;
const updateMap = (latitude, longitude) => {
    // map.setView([latitude, longitude], zoomLevel)
    map.setView([latitude, longitude], 17);

    // To display the map
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    // To edit the marker's logo 
    let myIcon = L.icon({
        iconUrl: '../images/icon-location.svg',
        // iconSize: [width, height]
        iconSize: [30, 40]
    });
    
    // If we will remove this if condition we will get to see more than one marker for the same pair of latitude and longtitude, don't know why it happens
    if(marker){
        map.removeLayer(marker);
    }
    // To make marker on the location
    marker = L.marker([latitude, longitude], {icon: myIcon}).addTo(map);
    
    // To give pop-up at the loaction 
    // marker.bindPopup("Location of IP Address").openPopup();
}
