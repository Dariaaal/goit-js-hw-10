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

countries.fetchCountries(searchQuery)
.then(country => {
    const markup = createCard(country);
    countryInfoCard.innerHTML = markup;
})
// .catch(onFetchError)
// .finally(()=>inputEl.reset());
};

function createCard({name,capital,population,flags,languages}){
    return `<h2>${flags, name}</h2>
    <p>Capital:${capital}</p>
    <p>Population:${population}</p>
    <p>Languages:${languages}</p>
    `;
}

// function renderCountryCard(country){
//     const markup = createCard;
//     countryInfoCard.innerHTML = markup;
// };

// function onFetchError(error){
//     Notiflix.Notify.failure('Oops, there is no country with that name');
// }

// function createList(country){
//     return `<li>${country}</li>`;
// }


