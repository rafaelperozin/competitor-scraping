# Price Monitoring App
How it works:
1. Create an JSON file colled produsct.js and add on [json folder](https://github.com/rafaelperozin/competitor-scraping/tree/master/app/json). You can se the required JSON structure on [products--EXAMPLE.json](https://github.com/rafaelperozin/competitor-scraping/blob/master/app/json/products--EXAMPLE.json) file
2. The robot will read and scrap the competitor:
    - Read local JSON
    - Create a queue of product (to prevent has the IP block) respecting the default delay between each product scan
    - Access the competitors link
    - Get the HTML
    - Scan page
    - Get price by selectors (class, id or itemprop)
    - Sort by price (lowest first)
    - Highlight your price
    - Print on screen
2. Run on [Chrome with the special configuration](#run-on-windows)
3. On browser, click on 'Compare' button

*Your Product*: Add at first on each product on the JSON file and change name on [setup.js](https://github.com/rafaelperozin/competitor-scraping/tree/master/app/src/scripts/config/setup.js)

You can have a look on [setup.js](https://github.com/rafaelperozin/competitor-scraping/tree/master/app/src/scripts/config/setup.js) all custom options.

## Run on Windows
After [install the app](#install-app) in your computor you should do this to use the app.
1. Open star menu
2. Type `run` + enter
3. Type `chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security` + enter
4. Acess local index like http://127.0.0.1:5500/index.html

## Install App
### 1. Install the node modules
After cloning the repository, go to the project folder go to the *app folder* and run:
```
npm install
```
or
```
yarn install
```

### 2. To run the app
```
gulp watching
```
You must use a local server to see access the [index.html](https://github.com/rafaelperozin/competitor-scraping/tree/master/app/index.html)
