/*

    IMPORTANT ADVERTS BEFORE CHANGE OR ADD SOME CODE
    It's strongly recommended having a look at readme.md and main.js advets before start

    @author: Rafael Perozin

    ! ON HOLD

*/

// const fs = require('fs');

// const getData = () => {
//     return new Promise((resolve, reject) => {
//         fs.readFile('/RMS/competitor-scraping/json/tester.json', 'utf8', (err, data) => {
//             if (err) { console.error(err); }
//             else {
//                 resolve(JSON.parse(data));
//             };
//         });
//     });
// };

// const verifyLink = link => {
//     const filteredArray = Object.values(res['product']).filter(index => index.link == link);
//     if (filteredArray.length > 0) return true;
//     return false;
// };

// export const addData = (newCompetitor, newLink, newSelector) => {
//     return getData().then(res => {
//         if (!verifyLink(newLink)) {
//             // Push new competitor to the current product
//             res['product'].push({ 'competitor': newCompetitor, 'link': newLink, 'selector': newSelector });
//             // Saving in the json file
//             fs.writeFile('/RMS/competitor-scraping/json/tester.json', JSON.stringify(res, null, "\t"), err => {
//                 if (err) throw err;
//                 return 'complete';
//             }
//             );
//         } else {
//             return 'This link is already registered. Please, try another one.';
//         }
//     });
// }