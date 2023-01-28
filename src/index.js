import './css/styles.css';
import FETCH from './fetchCountries';

const inputEl = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfoCard = document.querySelector('.country-info')

inputEl.addEventListener('input', onInputChange);

const DEBOUNCE_DELAY = 300;

function onInputChange(e){
e.preventDefault();

const searchQuery = e.target.value;

fetchCountries(searchQuery).then
};


