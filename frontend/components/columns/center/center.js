import "./center.pcss";

document.addEventListener("DOMContentLoaded", () => {
  const centerColumn = document.getElementById("center-col");
  const forecastContainer = document.getElementById("forecast-container");

  centerColumn.addEventListener("click", event => {
    function formatJSON(json) {
      const afterCommas = json.replace(/,/g, ",<br>");
      const openingBrackets = afterCommas.replace(/{/g, "{<br>");
      const closingBrackets = openingBrackets.replace(/}|\[/g, "<br>}");
      return closingBrackets.replace(/:/g, " : ");
    }

    if (event.target.classList.contains("format-bttn")) {
      switch (event.target.id) {
        case "forecastHTML":
          forecastContainer.innerHTML = localStorage.getItem("forecastHTML");
          break;
        case "forecastJSON":
          forecastContainer.innerHTML = `
          <div class="request-format-bttns">
            <button id="forecastHTML" class="format-bttn">Pretty</button>
            <button id="forecastJSON" class="format-bttn">JSON</button>
          </div>
          <p class="json">${formatJSON(
            localStorage.getItem("forecastJSON")
          )}</p>
          `;
          break;
        default:
      }
    }
  });
});
