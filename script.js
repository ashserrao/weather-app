let weather = {
  apiKey: "Insert your api Key here",
  fetchWeather: function (lat, lon) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
        lat +
        "&lon=" +
        lon +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      // .then((data) => console.log(data));
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    // console.log(name,icon,description,temp,humidity,speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
  },
  search: function () {
    this.fetchWeather(
      document.getElementById("lati").value,
      document.getElementById("long").value
    );
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});
document.getElementById("long").addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    weather.search();
  }
});

weather.fetchWeather(12.9716, 77.5946);
