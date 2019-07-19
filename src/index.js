/* eslint-disable import/no-extraneous-dependencies */
import './css/reset.css';
import './css/styles.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import getData from './loadData';
import {
  loadDom
} from './loadDOM';

const render = () => {
  const form = document.querySelector('#weather-form');

  form.addEventListener('submit', e => {
    const location = document.querySelector('#location');
    const searchTerm = location.value;
    e.preventDefault();
    getData(searchTerm)
      .then(data => {
        loadDom(data);
      })
      .catch(err => console.log(err));
  });
};

render();