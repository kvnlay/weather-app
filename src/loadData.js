import {
  showSpinner,
  hideSpinner
} from "./loadDOM";

// const checkErr = data => {
//   data.cod === '404' ? console.log('error 404') : console.log('done');
// }

const getData = async (location, units = 'metric') => {
  const key = '0ffb179338cb41ca82405723972c6fa3';
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  const s = `${baseUrl}?q=${location}&units=${units}&appid=${key}`;
  try {
    showSpinner();
    const response = await fetch(s, {
      mode: 'cors'
    });
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    return error;
  } finally {
    hideSpinner();
  }
};

// eslint-disable-next-line prettier/prettier
export default getData;