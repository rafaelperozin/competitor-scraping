/*

    IMPORTANT ADVERTS BEFORE CHANGE OR ADD SOME CODE
    It's strongly recommended having a look at readme.md and main.js advets before start

    @author: Rafael Perozin

*/
import prodData from "/RMS/competitor-scraping/app/json/products.json";
// Get data
export const data = SKU => [...prodData[SKU]].filter(data => JSON.stringify(data));