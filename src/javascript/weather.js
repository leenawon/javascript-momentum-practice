const API_KEY = "aa9e0fa890eadb16c5a83e85ecfbbf26";

function successGeolocation(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(weatherURL).then((response) => response.json()).then((data) => {
    const locationSpan = document.querySelector('div.weather span:first-child');
    const weatherSpan = document.querySelector('div.weather span:last-child');
    const location = data.name;
    const weather = data.weather[0].main;
    const temp = data.main.temp;

    locationSpan.innerText = location;
    weatherSpan.innerText = `${weather} / 기온 : ${temp}`;
  });
}

function errorGeolocation() {
  alert('위치를 찾는데 실패했습니다😢');
}

navigator.geolocation.getCurrentPosition(successGeolocation, errorGeolocation);