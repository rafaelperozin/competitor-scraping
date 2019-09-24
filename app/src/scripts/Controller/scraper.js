/*

    IMPORTANT ADVERTS BEFORE CHANGE OR ADD SOME CODE
    It's strongly recommended having a look at readme.md and main.js advets before start

    @author: Rafael Perozin

*/
import patterns from './../config/setup';
import request from 'request';
import cheerio from 'cheerio';
import { data } from '../Model/data';
import { formatMoney } from '../config/formtPrice';

const pat = patterns().getVal();

const delay = ms => new Promise(res => setTimeout(res, ms));

const cleanElement = element => {
    document.querySelector(element).innerHTML = '';
}

const addTitle = title => {
    document.querySelector(pat.mainElement).insertAdjacentHTML('beforeend', `<h2>${title}</h2>`);
    document.querySelector(pat.mainElement).insertAdjacentHTML('beforeend', `<img src="${pat.loadingGif}" id="${pat.gifID}" width=${pat.gifWidth}>`);
}

// Get prices
const getPrices = product => {
    // Create an array of promises
    const prices = [];
    // Loop into data
    data(product).map(index => {
        // Add promises to the array
        prices.push(new Promise((resolve, reject) => {
            // Get html code of the page
            request(index.link, (error, response, html) => {
                if (!error && response.statusCode == 200) {
                    let che, price, newItem;
                    // Use cheerio to scrap the html
                    che = cheerio.load(html);
                    // get price by itemprop or a css selector using . or # set on json
                    price = (index.selector.includes("itemprop")) ? che(index.selector).attr('content') : che(index.selector).text();
                    // Remove html tags
                    price = price.replace(/<[^>]*>?/gm, '');
                    // Remove extra spaces
                    price = price.replace(/\s+/g, ' ').trim();
                    // Remove pound sign (£)
                    price = price.replace(/\u00A3/g, '');
                    // Show just 2 decimals
                    price = formatMoney(price);
                    // Create object just with price and competitor name
                    newItem = {
                        "price": price,
                        "competitor": index.competitor
                    };
                    // Resolve promise returning the nnewItem Object
                    resolve(newItem);
                } else {
                    console.error(`ERROR ${response.statusCode}: Was not possible to scrap the ${index.competitor}: `)
                }
            });
        }));
    });
    // Execute all promise in the array
    return Promise.all(prices);
}

const printPrices = (SKU, pos, nextProd) => {
    // Ignore delay for first product
    const timeToWait = (pos == 0) ? 0 : pat.defaultDelay;
    // Promise
    // 1) wait the dalay
    delay(timeToWait)
        .then(() => {
            // 2) get prices
            return getPrices(SKU);
        })
        .then(res => {
            // 3) sort price (lowest first)
            let entries, resolve;
            // Convert object into array
            entries = Array.from(Object.values(res));
            // Sort competitors prices by price from lowest to heighest
            resolve = entries.sort((a, b) => a.price - b.price);
            console.log('resolve', resolve);
            /// Remove looding to show price list
            document.querySelector(`#${pat.gifID}`).remove();
            // loop to insert each price on the DOM
            resolve.map(index => {
                // 4) print price on the screen
                let highlightItem, newItem;
                // Heighlight our price
                highlightItem = (index.competitor == pat.myStore) ? ' our-price' : '';
                // Create the html element for each price
                newItem = `<p class="item${highlightItem}">${index.price} - ${index.competitor}</p>`;
                // Insert in the end of the list of prices
                document.querySelector(pat.mainElement).insertAdjacentHTML('beforeend', newItem);
            });
        })
        .then(() => {
            // 5) add divisory line
            document.querySelector(pat.mainElement).insertAdjacentHTML('beforeend', '<hr>')
            // 6) add next product title only if is true
            if (nextProd) addTitle(nextProd);
        });
}

export const showPrices = productsList => {
    // Empty the element before add price list
    cleanElement(pat.mainElement);
    // Loop into product list
    productsList.map((value, index, array) => {
        // Add title of first product
        if (index == 0) addTitle(value);
        // Get and show prices respecting the default delay
        return printPrices(value, index, array[index+1]);
    });
}