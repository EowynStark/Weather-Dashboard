var searchBarEl = document.querySelector('#search-bar');
var submitBtnEl = document.querySelector('#search-btn');
var forcastEl = document.querySelector('#forecast-display');

// creates the api request based on city name
function apiSearchRequest(event){
    event.preventDefault();
    var apiKey = 'dfc9eec57b266ff4d8df088e73ea10f0';
    var cityName = searchBarEl.value.trim();
    var units = 'imperial'
    var citySearchUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + apiKey + '&units=' + units;
    fetch(citySearchUrl).then(function(response){
            if(!response.ok){
                throw new Error('Weather information not available at this time');
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
    cityName.textContent = cityResults.city.name;
    forcastEl.appendChild(cityName);
    if (cityResults.list && cityResults.list.length > 0){
        var today = document.createElement('div');
        var dayOne = document.createElement('div');
        var dayTwo = document.createElement('div');
        var dayThree = document.createElement('div');
        var dayFour = document.createElement('div');
        var dayFive = document.createElement('div');
        today.textContent = cityResults.list[0].dt_txt;
        dayOne.textContent = cityResults.list[3].dt_txt;
        dayTwo.textContent = cityResults.list[11].dt_txt;
        dayThree.textContent = cityResults.list[19].dt_txt;
        dayFour.textContent = cityResults.list[27].dt_txt;
        dayFive.textContent = cityResults.list[35].dt_txt;
        var temperatureToday = document.createElement('p');
        var temperatureDayOne = document.createElement('p');
        var temperatureDayTwo = document.createElement('p');
        var temperatureDayThree = document.createElement('p');
        var temperatureDayFour = document.createElement('p');
        var temperatureDayFive = document.createElement('p');
        temperatureToday.textContent = 'Temperature ' + Math.floor(cityResults.list[0].main.temp) + ' F';
        temperatureDayOne.textContent = 'Temperature ' + Math.floor(cityResults.list[3].main.temp) + ' F';
        temperatureDayTwo.textContent = 'Temperature ' + Math.floor(cityResults.list[11].main.temp) + ' F';
        temperatureDayThree.textContent = 'Temperature ' + Math.floor(cityResults.list[19].main.temp) + ' F';
        temperatureDayFour.textContent = 'Temperature ' + Math.floor(cityResults.list[27].main.temp) + ' F';
        temperatureDayFive.textContent = 'Temperature ' + Math.floor(cityResults.list[35].main.temp) + ' F';
        var windspeedToday = document.createElement('p');
        var windspeedDayOne = document.createElement('p');
        var windspeedDayTwo = document.createElement('p');
        var windspeedDayThree = document.createElement('p');
        var windspeedDayFour = document.createElement('p');
        var windspeedDayFive = document.createElement('p');
        windspeedToday.textContent = 'windspeed ' + Math.floor(cityResults.list[0].wind.speed) + ' mph';
        windspeedDayOne.textContent = 'windspeed ' + Math.floor(cityResults.list[3].wind.speed) + ' mph';
        windspeedDayTwo.textContent = 'windspeed ' + Math.floor(cityResults.list[11].wind.speed) + ' mph';
        windspeedDayThree.textContent = 'windspeed ' + Math.floor(cityResults.list[19].wind.speed) + ' mph';
        windspeedDayFour.textContent = 'windspeed ' + Math.floor(cityResults.list[27].wind.speed) + ' mph';
        windspeedDayFive.textContent = 'windspeed ' + Math.floor(cityResults.list[35].wind.speed) + ' mph';
        var humidityToday = document.createElement('p');
        var humidityDayOne = document.createElement('p');
        var humidityDayTwo = document.createElement('p');
        var humidityDayThree = document.createElement('p');
        var humidityDayFour = document.createElement('p');
        var humidityDayFive = document.createElement('p');
        humidityToday.textContent = 'humidity ' + cityResults.list[0].main.humidity + '%';
        humidityDayOne.textContent = 'humidity ' + cityResults.list[3].main.humidity + '%';
        humidityDayTwo.textContent = 'humidity ' + cityResults.list[11].main.humidity + '%';
        humidityDayThree.textContent = 'humidity ' + cityResults.list[19].main.humidity + '%';
        humidityDayFour.textContent = 'humidity ' + cityResults.list[27].main.humidity + '%';
        humidityDayFive.textContent = 'humidity ' + cityResults.list[35].main.humidity + '%';
        var todayDescription = document.createElement('p');
        var dayOneDescription = document.createElement('p');
        var dayTwoDescription = document.createElement('p');
        var dayThreeDescription = document.createElement('p');
        var dayFourDescription = document.createElement('p');
        var dayFiveDescription = document.createElement('p');
        todayDescription.textContent = cityResults.list[0].weather[0].description;
        dayOneDescription.textContent = cityResults.list[3].weather[0].description;
        dayTwoDescription.textContent = cityResults.list[11].weather[0].description;
        // dayThreeDescription.textContent = cityResults[19].weather[0].description;
        // dayFourDescription.textContent = cityResults[27].weather[0].description;
        // dayFiveDescription.textContent = cityResults[35].weather[0].description;
        
        forcastEl.appendChild(today);
        today.appendChild(temperatureToday);
        temperatureToday.appendChild(windspeedToday);
        windspeedToday.appendChild(humidityToday);
        humidityToday.appendChild(todayDescription);

        forcastEl.appendChild(dayOne);
        dayOne.appendChild(temperatureDayOne);
        temperatureDayOne.appendChild(windspeedDayOne);
        windspeedDayOne.appendChild(humidityDayOne);
        humidityDayOne.appendChild(dayOneDescription);

        forcastEl.appendChild(dayTwo);
        dayTwo.appendChild(temperatureDayTwo);
        temperatureDayTwo.appendChild(windspeedDayTwo);
        windspeedDayTwo.appendChild(humidityDayTwo);
        humidityDayTwo.appendChild(dayTwoDescription);

        forcastEl.appendChild(dayThree);
        dayThree.appendChild(temperatureDayThree);
        temperatureDayThree.appendChild(windspeedDayThree);
        windspeedDayThree.appendChild(humidityDayThree);
        humidityDayThree.appendChild(dayThreeDescription);

        forcastEl.appendChild(dayFour);
        dayFour.appendChild(temperatureDayFour);
        temperatureDayFour.appendChild(windspeedDayFour);
        windspeedDayFour.appendChild(humidityDayFour);
        humidityDayFour.appendChild(dayFourDescription);

        forcastEl.appendChild(dayFive);
        dayFive.appendChild(temperatureDayFive);
        temperatureDayFive.appendChild(windspeedDayFive);
        windspeedDayFive.appendChild(humidityDayFive);
        humidityDayFive.appendChild(dayFiveDescription);
    }

}



submitBtnEl.addEventListener('click', apiSearchRequest);
