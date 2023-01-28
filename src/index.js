import './css/styles.css';
import { debounce } from 'lodash.debounce';
import countriesTpl from './fetchCountries';
import {Notify} from 'notiflix';

const inputEl = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfoCard = document.querySelector('.country-info')

const DEBOUNCE_DELAY = 300;

inputEl.addEventListener('input', _.debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(e){
e.preventDefault();

const searchQuery = e.target.value;

fetchCountries(searchQuery).then
};


