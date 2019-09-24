/*

    IMPORTANT ADVERTS BEFORE CHANGE OR ADD SOME CODE
    It's strongly recommended having a look at readme.md and main.js advets before start

    @author: Rafael Perozin

*/

const patterns = () => {
    const elementPattern = {
        // Never set element class or id directly on main.js or function
        // Just set here as an object then call as return suggest
        myStore: 'RMS',
        mainElement: '.page-content',
        loadingGif: 'img/loading.gif',
        gifWidth: '250',
        gifID: 'loading',
        defaultDelay: 10000
    }

    return {
        getVal() {
            // When call UI().getEl().objectProperty outside the function return the object property value
            // example: UI().getEl().backArrow = '.post__back-arrow'
            return elementPattern;
        }
    };
};

export default patterns;