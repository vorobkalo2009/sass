function createCountrys(countrys) {
    const markUp = countrys
      .map(
        ({ name, capital, flags }) =>
          `<li class="">
          <p> <img src="${flags.png}" alt="${flags.alt}" width="30"> ${name.common}</p>
     <p>${capital}</p>
     </li>`
      )
      .join(' ');
  
    return markUp;
  }
  
  function createCountry(country) {
    const markUp = country
      .map(
        ({ currencies, population, languages }) => `<div class="">
      <p>currencies --->  ${[...Object.keys(currencies)]} </p>
      <p>population --->  ${population} </p>
      <p>languages --->  ${[...Object.values(languages)]} </p>
   </div>`
      )
      .join(' ');
  
    return markUp;
  }
  