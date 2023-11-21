var searchBarEl = document.querySelector('#city-search')

function handleSearchFormSubmit(event){
    event.preventDefault();
    var cityName = document.querySelector('#search-bar').value;
    if (!cityName){
        alert('Enter valid city name');
        return;
    }
    // add call to fetch request api function pass it city name input
}

function apiSearchRequest(cityName){
    var citySearchUrl = 'api.openweathermap.org/data/2.5/forecast?q=';
    
    if (cityName){
        citySearchUrl += cityName + '&appid=51a1f8ff3617888a4b4e6a6b16d5a2d6';
    }
    fetch(citySearchUrl)
        .then(function(response){
            if(!response.ok){
                throw response.json();
            }
            return response.json();
        })
}
// may need to grab btn element if this doesn't fire
searchBarEl.addEventListener('click', handleSearchFormSubmit);










// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed

// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city