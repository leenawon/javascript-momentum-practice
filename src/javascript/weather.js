function successGeolocation(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(latitude, longitude);
}

function errorGeolocation() {
  alert('위치를 찾는데 실패했습니다😢');
}

navigator.geolocation.getCurrentPosition(successGeolocation, errorGeolocation);