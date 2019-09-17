import babelPolyfill from "@babel/polyfill";
import * as scraper from './Controller/scraper';
// import * as action from './Controller/add';

const cleanElement = element => {
    document.querySelector(element).innerHTML = '';
}

// Just when document ready execute the functions inside of this function
document.addEventListener("DOMContentLoaded", () => {

    // COMPARE #################################################################################################
    document.querySelector('#compare').addEventListener('click', () => {

        const mainElement = '.page-content';
        cleanElement(mainElement);

        scraper.getPrices('AC110BL').then(res => {
            // Convert object into array
            const entries = Array.from(Object.values(res));
            // Sort competitors prices by price from lowest to heighest
            const resolve = entries.sort((a, b) => a.price - b.price);
            // loop to insert each price on the DOM
            resolve.map(index => {
                // Heighlight our price
                const highlightItem = (index.competitor == 'RMS') ? ' our-price' : '';
                // Create the html element for each price
                const newItem = `<p class="item${highlightItem}">${index.price} - ${index.competitor}</p>`;
                // Insert in the end of the list of prices
                document.querySelector(mainElement).insertAdjacentHTML('beforeend', newItem);
            });
        });
    });

    // ADD #################################################################################################
    // document.querySelector('#add').addEventListener('click', () => {
    //     const mainElement = '.page-content';
    //     cleanElement(mainElement)
    //     action.addData('Amazon', 'https://www.amazon.co.uk/ONDULINE-EASYLINE-Easyline-Onduline-co-uk-instructions/dp/B01B832Q3G', '#priceblock_ourprice').then(console.log);
    // });
});