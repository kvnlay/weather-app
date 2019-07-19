const getData = async location => {
  const key = '0ffb179338cb41ca82405723972c6fa3';
  const baseUrl = 'api.openweathermap.org/data/2.5/weather';
  const url = `${baseUrl}?q=${location}&appid=${key}`;
  try {
    const response = await fetch(url, {
      mode: 'cors'
    });
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    return error;
  }
};

// eslint-disable-next-line prettier/prettier
export default getData;