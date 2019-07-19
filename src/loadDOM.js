const clear = el => {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
};

const loadDom = city => {
  const dataContainer = document.getElementById('data');
  clear(dataContainer);

  const weatherInfo = document.createElement('div');
  weatherInfo.id = 'weather-info';

  const temp = document.createElement('h1');
  temp.innerHTML = city.main.temp;

  const weather = document.createElement('h2');
  weather.innerHTML = city.weather[0].description;

  const name = document.createElement('h3');
  name.innerHTML = city.name;

  [temp, weather, name].forEach(child => {
    weatherInfo.appendChild(child);
  });

  const otherInfo = document.createElement('div');
  otherInfo.id = 'other-info';

  const wind = document.createElement('div');
  const windIcon = document.createElement('div');
  windIcon.innerHTML = '<i class="fas fa-wind"></i>';
  const windLvl = document.createElement('p');
  windLvl.innerHTML = city.wind.speed;
  const windTitle = document.createElement('h2');
  windTitle.innerHTML = 'Wind';

  [windIcon, windLvl, windTitle].forEach(child => {
    wind.appendChild(child);
  });

  const humidity = document.createElement('div');
  const humidityIcon = document.createElement('div');
  humidityIcon.innerHTML = '<i class="fas fa-temperature-low"></i>';
  const humidityLvl = document.createElement('p');
  humidityLvl.innerHTML = city.main.humidity;
  const humidityTitle = document.createElement('h2');
  humidityTitle.innerHTML = 'Humidity';

  [humidityIcon, humidityLvl, humidityTitle].forEach(child => {
    humidity.appendChild(child);
  });

  const pressure = document.createElement('div');
  const pressureIcon = document.createElement('div');
  pressureIcon.innerHTML = '<i class="fas fa-tachometer-alt"></i>';
  const pressureLvl = document.createElement('p');
  pressureLvl.innerHTML = city.main.pressure;
  const pressureTitle = document.createElement('h2');
  pressureTitle.innerHTML = 'pressure';

  [pressureIcon, pressureLvl, pressureTitle].forEach(child => {
    pressure.appendChild(child);
  });

  [humidity, wind, pressure].forEach(child => {
    otherInfo.appendChild(child);
  });

  [humidityIcon, pressureIcon, windIcon].forEach(el => el.classList.add('icon'));

  [weatherInfo, otherInfo].forEach(child => dataContainer.appendChild(child));
};

// eslint-disable-next-line prettier/prettier
export {
  loadDom
};