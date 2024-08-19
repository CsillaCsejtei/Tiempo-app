let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearchCity);

function handleSearchCity(event) {
  event.preventDefault();
  let search = document.querySelector("#search-form-input");
  searchCity(search.value);
}

function searchCity(city) {
  let apiKey = "a7f4435600oc7ca6bdf3abed988ftf39";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}
function updateWeather(response) {
  let temperature = document.querySelector("#temperature");
  let originCity = document.querySelector("#city");
  originCity.innerHTML = respnse.data.city;
  temperature.innerHTML = Math.round(response.data.temperature.current);
}
