import NewClass from './count2';
import Notiflix from 'notiflix';
import { createCountry, createCountrys } from './country';
import { debounce } from 'debounce';

const refs = {
  input: document.querySelector('#search-box'),
  country: document.querySelector('.country-list'),
  info: document.querySelector('.country-info'),
};

const newClass = new NewClass();
refs.input.addEventListener('input', debounce(inputValue, 1000));

function inputValue(e) {
  const value = e.target.value.trim();
  newClass.val = value;

  if (!value) {
    createHtml();
    Notiflix.Notify.info('Введіть валідне значення');
    return;
  }

  newClass.fetchCountries().then(response => {
    if (response.length >= 10) {
      createHtml();
      Notiflix.Notify.info('Занадто багато результатів');
      return;
    }

    if (response.length < 10 && response.length > 2) {
      createHtml(createCountrys(response));
      Notiflix.Notify.info('Введіть більш точне значення');
      return;
    }

    if (response.length === 1) {
      console.log(response);
      createHtml(createCountrys(response), createCountry(response));
      Notiflix.Notify.info('Ми знайшли! Ура!');
      return;
    }
  });
}

function createHtml(country = '', info = '') {
  refs.country.innerHTML = country;
  refs.info.innerHTML = info;
}