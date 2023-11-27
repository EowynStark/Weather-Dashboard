var searchBarEl = document.querySelector('#search-bar');
var submitBtnEl = document.querySelector('#search-btn');
var forcastEl = document.querySelector('#forecast-display');

// creates the api request based on city name
function apiSearchRequest(event){
    event.preventDefault();
    var apiKey = '51a1f8ff3617888a4b4e6a6b16d5a2d6';
    var cityName = searchBarEl.value.trim();
    var citySearchUrl = 'https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=' + cityName +'&appid=' + apiKey;
    
    fetch(citySearchUrl).then(function(response){
            if(!response.ok){
                throw new Error(response);
            }
            return response.json();
        })
        .then(function(cityResults){
            displayForecast(cityResults);
            console.log(cityResults);
        })
        .catch(function(error){
            console.error('Error fetching weather information', error);
            alert('Error retrieving information, please try again later');
        });   
}

// creates and populates the 5 day forecast with information out of the api request return array
function displayForecast(cityResults){
    var cityName = document.createElement('h2');
    var today = document.createElement('div');
    var dayOne = document.createElement('div');
    var dayTwo = document.createElement('div');
    var dayThree = document.createElement('div');
    var dayFour = document.createElement('div');
    var dayFive = document.createElement('div');

    cityName.textContent = cityResults.city.name;
    // today.textContent = cityResults.list[0].dt_txt;
    // dayOne.textContent = cityResults.list[9].dt_txt;
    // dayTwo.textContent = cityResults.list[17].dt_txt;
    // dayThree.textContent = cityResults.list[25].dt_txt;
    // dayFour.textContent = cityResults.list[33].dt_txt;
    // dayFive.textContent = cityResults.list[41].dt_txt;

    forcastEl.appendChild(cityName);

    if (cityResults.list && cityResults.list.length > 0){
        var temperatureToday = document.createElement('p');
        var temperatureDayOne = document.createElement('p');
        var temperatureDayTwo = document.createElement('p');
        var temperatureDayThree = document.createElement('p');
        var temperatureDayFour = document.createElement('p');
        var temperatureDayFive = document.createElement('p');

        temperatureToday.textContent = 'Temperature ' + cityResults.list[0].main.temp + ' F';
        temperatureDayOne.textContent = 'Temperature ' + cityResults.list[9].main.temp + ' F';
        temperatureDayTwo.textContent = 'Temperature ' + cityResults.list[17].main.temp + ' F';
        temperatureDayThree.textContent = 'Temperature ' + cityResults.list[25].main.temp + ' F';
        temperatureDayFour.textContent = 'Temperature ' + cityResults.list[33].main.temp + ' F';
        temperatureDayFive.textContent = 'Temperature ' + cityResults.list[41].main.temp + ' F'; 

        forcastEl.appendChild(today);
        today.appendChild(temperatureToday);
        forcastEl.appendChild(dayOne);
        dayOne.appendChild(temperatureDayOne);
        forcastEl.appendChild(dayTwo);
        dayTwo.appendChild(temperatureDayTwo);
        forcastEl.appendChild(dayThree);
        dayThree.appendChild(temperatureDayThree);
        forcastEl.appendChild(dayFour);
        dayFour.appendChild(temperatureDayFour);
        forcastEl.appendChild(dayFive);
        dayFive.appendChild(temperatureDayFive);
    }   
}



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