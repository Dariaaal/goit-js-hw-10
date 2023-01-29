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

// function createCard({name, flags, capital, languages, population}){
//     languages.map((lang) => lang.name).join(', ');
//     const markup = `<h2><img src='${flags.svg}' alt='flag' width='100' height='100'/> ${name.official}</h2>
//        <p>Capital: ${capital}</p>
//        <p>Population: ${population}</p>
//        <p>Languages: ${languages}</p>
//        `;
    
//     countryInfoCard.innerHTML = markup;
// }

function createCard(country){
    const markup = `<h2><img src='${country.flags.svg}' alt='flag' width='30' class='country-flag'/>${country.name.official}</h2>
    <p>Capital: ${country.capital}</p>
    <p>Population: ${country.population}</p>
    <p>Languages: ${country.languages}</p>
    `;
    
    countryInfoCard.innerHTML = markup;
}

function createList(country){
    const list = country.map(name => `<li>${country}</li>`);
    countryList.innerHTML = list;
}

// function onFetchError(error){
//     Notiflix.Notify.failure('Oops, there is no country with that name');
// }




