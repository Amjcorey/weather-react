  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "70de72ce25d0801c193edd1d17ced422";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(displayWeather);
  }
