/*

    IMPORTANT ADVERTS BEFORE CHANGE OR ADD SOME CODE
    It's strongly recommended having a look at readme.md and main.js advets before start

    @author: Rafael Perozin

*/

import babelPolyfill from "@babel/polyfill";
import * as scraper from './Controller/scraper';

// Just when document ready execute the functions inside of this function
document.addEventListener("DOMContentLoaded", () => {

    document.querySelector('#compare').addEventListener('click', () => {
        const productsArr = ['AC110BL', 'AC110GR'];
        scraper.showPrices(productsArr);
    });

});