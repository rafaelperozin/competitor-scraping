import prodData from "/RMS/competitor-scraping/json/products.json";
// Get data
export const data = SKU => [...prodData[SKU]].filter(data => JSON.stringify(data));