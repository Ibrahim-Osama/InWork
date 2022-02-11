// import { runSearch } from './searchController.js';
import SEARCH_CONFIG from './configs/searchConfig.js';

let currentCategory = 'carpenter';
const categories = document.querySelectorAll('.category');

categories.forEach(category => {
    category.addEventListener('click', function () {
        console.log(this)
        currentCategory = this.getAttribute("data-category");

        sessionStorage.setItem('category', currentCategory);

        location = location.origin + '/views/search.html';
    });
});