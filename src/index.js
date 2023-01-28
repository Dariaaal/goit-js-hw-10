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
.then(renderCountryCard)
.catch(onFetchError)
.finally(()=>inputEl.reset());
};

function renderCountryCard(country){
    const markup = countries(country);
    inputEl.innerHTML = markup;
};

function onFetchError(error){
    Notiflix.Notify.failure('Oops, there is no country with that name');
}

