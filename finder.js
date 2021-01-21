const URL = "https://api.weatherbit.io/v2.0/current?postal_code=59199&country=FR&lang=fr&key=6d6e048c34ba48c19818ec9f5a1c1117";

let selector = document.getElementById("currentWeather");

fetch(URL)
.then((response) => response.json())
.then((response) => {
  console.log(response);
  return response;
})
.then((response) => {
  response.data.forEach((weather) => {showWeather(selector, weather.weather.icon, weather.city_name, weather.weather.description, weather.temp, weather.precip);})
});

const showWeather = (selector,icon, name, temps, temperature, rain) => {
  selector.innerHTML += `
      <div class="flex justify-center items-center">
      <img src="https://www.weatherbit.io/static/img/icons/${icon}.png" alt="">
      </div>
      <div class="text-center">
        <hr>
          <h2>Ville : ${name}</h2>
          <h2>Temps : ${temps}°</h2>
          <h2>Température : ${temperature}°</h2>
          <p>Risque de pluie : ${rain} %</p>
          <hr>
      </div>
  `
}