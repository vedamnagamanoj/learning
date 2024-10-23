'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

const popupOpt = {
  maxWidth: 250,
  minWidth: 100,
  autoClose: false,
  closeOnClick: false,
  className: 'running-popup',
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    position => {
      const { latitude, longitude } = position.coords;
      const coords = [latitude, longitude];
      const map = L.map('map', { center: coords, zoom: 13 });

      L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coords)
        .addTo(map)
        .bindPopup(L.popup(popupOpt))
        .setPopupContent(`Your Location: ${latitude} : ${longitude}`)
        .openPopup();

      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      map.on('click', function (mapEvnt) {
        form.classList.remove('hidden');
        inputDistance.focus();
        // console.log(mapEvnt);
        // const { lat, lng } = mapEvnt.latlng;

        // const coords = [lat, lng];

        // L.marker(coords)
        //   .addTo(map)
        //   .bindPopup(L.popup(popupOpt))
        //   .setPopupContent(`Your Location: ${latitude} : ${longitude}`)
        //   .openPopup();
        // map.setView(coords, 13);
      });
    },
    () => {
      alert('could not get your location');
    }
  );
}

form.addEventListener('submit', function () {
  // Display marker
});
