/*

    IMPORTANT ADVERTS BEFORE CHANGE OR ADD SOME CODE
    It's strongly recommended having a look at readme.md and main.js advets before start

    @author: Rafael Perozin

*/

const patterns = () => {
    const elementPattern = {
        myStore: 'RMS',
        mainElement: '.page-content',
        loadingGif: 'img/loading.gif',
        gifWidth: '250',
        gifID: 'loading',
        defaultDelay: 10000
    }

    return {
        getVal() {
            return elementPattern;
        }
    };
};

export default patterns;