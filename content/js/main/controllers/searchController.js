import SEARCH_CONFIG from './configs/searchConfig.js';
import searchAPI from '../models/searchModel.js';
import { API } from '../models/services/api.js';

const config = {};

let category = '';
category = sessionStorage.getItem('category');

// Get Search Option From Session Storage
// for (let key in SEARCH_CONFIG)
// config[key] = sessionStorage.getItem(key);

// Get API From Search Model
/*
searchAPI().then(api =>
    // Display API in The Document
    displayAPI(api)
).catch(err =>
    console.log(err)
);
*/

console.log(API);

displayAPI(API);

function displayAPI(api) {
    const searchContainer = document.getElementById('searchContainer');

    // Loop On API And Display It In The Document
    for (let object of api) {
        let template =
            `
            <div class="col-md-4">
                <div class="card">
                    <img src="${object.logo}" class="card-img-top" alt="${object.name} Logo">
                    <div class="card-body">
                        <h5 class="card-title" data-id="${object.id}">${object.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted ">${object.owners[0].name}</h6>
                        <p class="card-text">${object.bio}</p>
                        b5
                    </div>
                </div>
            </div>
            `;

        searchContainer.innerHTML += template;
    }
}


const workerNames = document.querySelectorAll('.worker-name');

workerNames.forEach(workerName => {
    workerName.addEventListener('click', function () {
        // sessionStorage.setItem('workerId', this.dataGet['id']);
        console.log(this)
    });
});
