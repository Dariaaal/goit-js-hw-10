import './css/styles.css';
import debounce from 'lodash.debounce';
import countries from './fetchCountries';
import Notiflix from 'notiflix';

const inputEl = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfoCard = document.querySelector('.country-info')

const DEBOUNCE_DELAY = 300;

inputEl.addEventListener('input', debounce(onInputChange,DEBOUNCE_DELAY));

function onInputChange(e){
e.preventDefault();

const searchQuery = e.target.value;

countries.fetchCountries(searchQuery).then(country => {
    console.log(country);
    createCard(country[0]);
});
};

function createCard(country){
    console.log(country);
    const markup = `<h2>${country.flags, country.name.official}</h2>
    <p>Capital: ${country.capital}</p>
    <p>Population: ${country.population}</p>
    <p>Languages: ${country.languages}</p>
    `;
    
    countryInfoCard.innerHTML = markup;
}

// function onFetchError(error){
//     Notiflix.Notify.failure('Oops, there is no country with that name');
// }

// function createList(country){
//     return `<li>${country}</li>`;
// }


