import "./routes.pcss";
import { default as responseJson } from "./response_json";

document.addEventListener("DOMContentLoaded", () => {
  const routeCont = document.getElementById("route-cont");
  const routes = document.querySelectorAll(".route");
  const forecastCont = document.getElementById("forecast-container");

  localStorage.setItem("exampleJSON", responseJson().surfForecast);
  localStorage.setItem("exampleHTML", forecastCont.innerHTML);
  function insertExampleJson(event) {
    switch (event.target.id) {
      case "search-locations":
        forecastCont.innerHTML = responseJson().searchLocations;
        break;
      case "all-locations":
        forecastCont.innerHTML = responseJson().allLocations;
        break;
      case "surf-forecast":
        forecastCont.innerHTML = localStorage.getItem("exampleJSON");
        break;
      default:
    }
  }

  routeCont.addEventListener("click", event => {
    if (event.target.classList.contains("route")) {
      for (let i = 0; i < routes.length; i += 1) {
        routes[i].classList.remove("selected");
      }
      event.target.classList.add("selected");
      insertExampleJson(event);
    }
  });
});
