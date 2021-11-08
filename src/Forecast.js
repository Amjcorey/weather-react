//Forecast


function displayForecast(response) {
  let forecast = response.data.daily;

  let forecastElement = document.querySelector("#forecast");


  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
   if (index < 6 ) {
    forecastHTML += 
        `
            <div class="col-2">
                <div class="weather-forcast-date">${formatDay(forecastDay.dt)}</div>
                    <img 
                    src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png" 
                    alt=""
                    width="36px"
                    />
                    <div class="forecast-temperature">
                    <span class="weather-forecast-temperature-max">
                    ${Math.round(forecastDay.temp.max)}°
                    </span>
                    <span class="weather-forecast-temperature-min">
                    ${Math.round(forecastDay.temp.min)}°
                    </span>
                  </div>
            </div>
        `;
   }
      });
 
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML; 

}