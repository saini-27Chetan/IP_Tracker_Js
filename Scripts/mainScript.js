// Script to fetch data from API and updating the DOM

const api = `at_60eqv0jdSd2Hu5psrTGJbklLztcNg`;
let URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${api}`

let ipAddress = document.getElementById('ip-address');
let city = document.getElementById('city');
let country = document.getElementById('country');
let postalCode = document.getElementById('postalcode');
let timeZone = document.getElementById('timezone');
let isp = document.getElementById('isp');

// Fetcing the details from the api
const fetchData = async(inputValue) =>{
    if(inputValue != null){
        URL = `${URL}&ipAddress=${inputValue}`;
    }
    let response = await fetch(URL);
    let data = await response.json();
    
    // console.log(data);
    
    // Changing the data of respective elements
    ipAddress.innerText = data.ip;
    city.innerText = data.location.city;
    country.innerText = data.location.country;
    postalCode.innerText = data.location.postalCode;
    timeZone.innerText = data.location.timezone;
    isp.innerText = data.isp;

    // Updating the location over the map
    let latitude = data.location.lat;
    let longitude = data.location.lng;
    updateMap(latitude, longitude);
}

// Initially fetching the current ip location, this will help to display the inital content
fetchData();

// Taking input of the user
const inputBtn = document.getElementById('btn');
let inputField = document.getElementById("input"); 

inputField.addEventListener('keypress', (event)=>{
    if(event.key === 'Enter'){
        event.preventDefault();     // To prevent the reloading of the page
        inputBtn.click();   // Trigger the button element with a click
    }
})
inputBtn.addEventListener('click', ()=>{
    // To get the input value
    inputValue = inputField.value; 

    inputField.value='';    // To clear the input field
    fetchData(inputValue);
})