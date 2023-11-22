var searchBarEl = document.querySelector('#search-bar');
var submitBtnEl = document.querySelector('#search-btn');
var forcastEl = document.querySelector('#forecast-display');

function apiSearchRequest(event){
    event.preventDefault();
    var apiKey = '51a1f8ff3617888a4b4e6a6b16d5a2d6';
    var cityName = searchBarEl.value.trim();
    var citySearchUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName +'&appid=' + apiKey;
    
    fetch(citySearchUrl).then(function(response){
            if(!response.ok){
                throw new Error(response);
            }
            return response.json();
        })
        .then(function(cityResults){
            // displayForecast(cityResults);
            console.log(cityResults);
        })
        .catch(function(error){
            console.error('Error fetching weather information', error);
            alert('Error retrieving information, please try again later');
        });
    
}

// displayForecast()
// may need to grab btn element if this doesn't fire
submitBtnEl.addEventListener('click', apiSearchRequest);












// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city