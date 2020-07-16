window.addEventListener("load", () => {
  let lng;
  let lat;
  let tempDes = document.querySelector(".tempreture-description");
  let tempDeg = document.querySelector(".degree");
  let locationTimezone = document.querySelector(".location-timezone");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      lng = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=38f4c43eb08f8236f23ad4ccbbe6e241`;
      fetch(api)
        .then(data => {
          return data.json();
        })
        .then(data => {
          console.log(data);
          const { temp } = data.main;
          tempDeg.textContent = temp - 273;

          locationTimezone.textContent = data.name;
        });
    });
  }
});
