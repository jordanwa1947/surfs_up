import "./location_search.pcss";

document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.getElementById("location-dropdown");
  const searchField = document.getElementById("location-field");
  const forecastContainer = document.getElementById("forecast-container");

  function fetchLocations(event) {
    // uncomment and remove the local url to use the production server
    // const url = 'https://surf-forecast-api.herokuapp.com/api/v1/search/locations';
    if (event.target.value) {
      const url = "http://localhost:3000/api/v1/search/locations";
      const query = searchField.value;
      fetch(`${url}?query=${query}`)
        .then(data => data.json())
        .then(json => {
          let dropdownText = "";
          for (let i = 0; i < json.data.length; i += 1) {
            const spot = json.data[i].attributes;
            dropdownText += `<div id='${spot.id}' class='location-drop-selection'> ${spot.location} </div>`;
          }
          dropdown.innerHTML = dropdownText;
        });
    }
  }

  dropdown.addEventListener("click", event => {
    // uncomment and remove the local url to use the production server
    // const url = 'https://surf-forecast-api.herokuapp.com/api/v1/';
    const url = "http://localhost:3000/api/v1/";
    if (event.target.classList.contains("location-drop-selection")) {
      const locationId = event.target.id;
      dropdown.innerHTML = "";
      fetch(`${url}${locationId}/surf`)
        .then(data => data.json())
        .then(json => {
          const forecast = json.data.attributes;
          const name = json.data.attributes.location.location;
          forecastContainer.innerHTML = `
          <h2 class="location-name"> ${name} </h2>
          <table class="forecast-table">
            <tr>
              <td>Faded Rating</td>
              <td>${forecast.faded_rating}</td>
            </tr>
            <tr>
              <td>Solid Rating</td>
              <td>${forecast.solid_rating}</td>
            </tr>
            <tr>
              <td>Issued</td>
              <td>${forecast.issue_timestamp}</td>
            </tr>
            <tr>
              <td>Minimum Breaking Height</td>
              <td>${forecast.min_break_height + forecast.wave_unit}</td>
            </tr>
            <tr>
              <td>Maximum Breaking Height</td>
              <td>${forecast.max_break_height + forecast.wave_unit}</td>
            </tr>
            <tr>
              <td>Wind Speed</td>
              <td>${forecast.wind_speed + forecast.wind_unit}</td>
            </tr>
            <tr>
              <td>Wind Gusts</td>
              <td>${forecast.wind_gusts + forecast.wind_unit}</td>
            </tr>
            <tr>
              <td>Temperature</td>
              <td>${forecast.temperature + forecast.temperature_unit}</td>
            </tr>
          </table>
          `;
        });
    }
  });

  document.fetchLocations = fetchLocations;
});
