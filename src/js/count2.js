const BASE_URL = 'https://restcountries.com/v3.1/';

export default class NewClass {
  constructor() {
    this.value = 'Ukraine';
  }

  fetchCountries() {
    return fetch(`${BASE_URL}name/${this.value}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .catch(err => console.log(err.status));
  }

  get val() {
    return this.value;
  }

  set val(newValue) {
    this.value = newValue;
  }
}