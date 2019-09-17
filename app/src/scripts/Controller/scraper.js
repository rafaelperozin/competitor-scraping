import request from 'request';
import cheerio from 'cheerio';
import { data } from '../Model/data';
import { formatMoney } from '../config/formtPrice';

// Get prices
export const getPrices = product => {
    const prices = [];
    console.log(data(product));
    data(product).map(index => {
        prices.push(new Promise((resolve, reject) => {
            request(index.link, (error, response, html) => {
                if (!error && response.statusCode == 200) {
                    let che, price, newItem;
                    
                    che = cheerio.load(html);
                    price = (index.selector.includes("itemprop")) ? che(index.selector).attr('content') : che(index.selector).text();

                    // Remove html tags
                    price = price.replace(/<[^>]*>?/gm, '');
                    // Remove extra spaces
                    price = price.replace(/\s+/g, ' ').trim();
                    // Remove pound sign (£)
                    price = price.replace(/\u00A3/g, '');
                    // Show just 2 decimals
                    price = formatMoney(price);

                    newItem = {
                        "price": price,
                        "competitor": index.competitor
                    };
                    resolve(newItem);
                } else {
                    console.error(`ERROR ${response.statusCode}: Was not possible to scrap the ${index.competitor}: `)
                }
            });
        }));
    });
    return Promise.all(prices);
}