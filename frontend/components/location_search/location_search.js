import "./location_search.pcss";

document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.getElementById("location-dropdown");
  const searchField = document.getElementById("location-field");

  function fetchLocations() {
    // uncomment to use the production server
    // const url = 'https://surf-forecast-api.herokuapp.com/api/v1/search/locations';
    const url = "http://localhost:3000/api/v1/search/locations";
    const query = searchField.value;
    fetch(`${url}?query=${query}`)
      .then(data => data.json())
      .then(json => {
        let dropdownText = "";
        for (let i = 0; i < json.data.length; i += 1) {
          const spot = json.data[i].attributes;
          dropdownText += `<div id='${spot.id}'> ${spot.location} </div>`;
        }
        dropdown.innerHTML = dropdownText;
      });
  }

  document.fetchLocations = fetchLocations;
});
