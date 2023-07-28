document.addEventListener('DOMContentLoaded', function () {
    // Simulated weather data (you can replace this with real data from an API)
    const weatherData = {
      cityName: 'Surreal City',
      temperature: 25,
      weatherDescription: 'Dreamy Skies',
    };
  
    // Function to update the weather card
    function updateWeatherCard(data) {
      const cityNameElement = document.querySelector('.city-name');
      const temperatureElement = document.querySelector('.temperature');
      const weatherDescriptionElement = document.querySelector('.weather-description');
  
      cityNameElement.textContent = data.cityName;
      temperatureElement.textContent = `${data.temperature}°C`;
      weatherDescriptionElement.textContent = data.weatherDescription;
    }
  
    // Initial data update
    updateWeatherCard(weatherData);
  });
  