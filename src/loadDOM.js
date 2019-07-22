import getData from './loadData';
import {
  converter
} from './helpers';

const dataContainer = document.getElementById('data');
const loader = document.getElementById('loader');
const form = document.querySelector('#weather-form');

const clear = el => {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
};

const showSpinner = () => {
  loader.classList.remove('hidden');
};

const hideSpinner = () => {
  loader.classList.add('hidden');
};

const loadErr = err => {
  if (err) {
    const errContainer = document.createElement('div');
    errContainer.id = 'message';
    errContainer.innerHTML = 'Location not found';
    dataContainer.appendChild(errContainer);
  }
};

const changeUnit = el => {
  const els = document.querySelectorAll('.unit.active');
  els.forEach(elem => elem.classList.remove('active'));
  el.classList.add('active');
};

const createToggler = parent => {
  const div = document.createElement('div');
  div.classList.add('toggler');
  const cels = document.createElement('div');
  cels.innerHTML = '<span>&#176;</span>C';
  cels.id = 'C';
  const fahr = document.createElement('div');
  fahr.innerHTML = '<span>&#176;</span>F';
  fahr.id = 'F';
  [cels, fahr].forEach(child => {
    child.classList.add('unit');
    div.appendChild(child);
  });
  cels.classList.add('active');
  parent.appendChild(div);

  cels.addEventListener('click', e => {
    if (e.target.classList.contains('active')) return;
    const temprature = document.getElementById('temp');
    changeUnit(e.target);
    temprature.innerHTML = `${converter('C', parseInt(temprature.innerHTML, 10))}°C`;
  });

  fahr.addEventListener('click', e => {
    if (e.target.classList.contains('active')) return;
    const temprature = document.getElementById('temp');
    changeUnit(e.target);
    temprature.innerHTML = `${converter('F', parseInt(temprature.innerHTML, 10))}°F`;
  });
};

const loadDom = city => {
  clear(dataContainer);

  const weatherInfo = document.createElement('div');
  weatherInfo.id = 'weather-info';

  const temp = document.createElement('h1');
  temp.innerHTML = `${Math.round(city.main.temp)}<span>&#176;</span>C`;
  temp.id = 'temp';

  const name = document.createElement('h2');
  name.innerHTML = `${city.name}, ${city.sys.country}`;

  const icon = document.createElement('img');
  icon.src = `http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`;
  icon.alt = city.weather[0].description;

  const weather = document.createElement('h3');
  weather.innerHTML = city.weather[0].description;

  const w = document.createElement('div');
  w.classList.add('w-info');
  w.appendChild(icon);
  w.appendChild(weather);

  [temp, name, w].forEach(child => {
    weatherInfo.appendChild(child);
  });

  const otherInfo = document.createElement('div');
  otherInfo.id = 'other-info';

  const wind = document.createElement('div');
  const windIcon = document.createElement('div');
  windIcon.innerHTML = '<i class="fas fa-wind"></i>';
  const windLvl = document.createElement('p');
  windLvl.innerHTML = `${city.wind.speed}mps`;
  const windTitle = document.createElement('h2');
  windTitle.innerHTML = 'Wind';

  [windIcon, windLvl, windTitle].forEach(child => {
    wind.appendChild(child);
  });

  const humidity = document.createElement('div');
  const humidityIcon = document.createElement('div');
  humidityIcon.innerHTML = '<i class="fas fa-temperature-low"></i>';
  const humidityLvl = document.createElement('p');
  humidityLvl.innerHTML = `${city.main.humidity}%`;
  const humidityTitle = document.createElement('h2');
  humidityTitle.innerHTML = 'Humidity';

  [humidityIcon, humidityLvl, humidityTitle].forEach(child => {
    humidity.appendChild(child);
  });

  const pressure = document.createElement('div');
  const pressureIcon = document.createElement('div');
  pressureIcon.innerHTML = '<i class="fas fa-tachometer-alt"></i>';
  const pressureLvl = document.createElement('p');
  pressureLvl.innerHTML = `${Math.round(city.main.pressure)}`;
  const pressureTitle = document.createElement('h2');
  pressureTitle.innerHTML = 'Air pressure';

  [pressureIcon, pressureLvl, pressureTitle].forEach(child => {
    pressure.appendChild(child);
  });

  [humidity, wind, pressure].forEach(child => {
    child.classList.add('info-card');
    otherInfo.appendChild(child);
  });

  [humidityIcon, pressureIcon, windIcon].forEach(el => el.classList.add('icon'));

  [weatherInfo, otherInfo].forEach(child => dataContainer.appendChild(child));

  createToggler(dataContainer);
};

const listeners = () => {
  form.addEventListener('submit', e => {
    const location = document.querySelector('#location');
    const searchTerm = location.value;
    e.preventDefault();
    getData(searchTerm)
      .then(data => {
        loadDom(data);
      })
      .catch(err => loadErr(err));
  });
};

// eslint-disable-next-line prettier/prettier
export {
  showSpinner,
  hideSpinner,
  listeners
};