// create instances
const router = require('express').Router();

// auth login - attache to the router
router.get('/login', (req, res) => {
    res.render('login');
});

// auth logout - attache to the router
router.get('/logout', (req, res) => {
    // hanlde with passport
    res.send('Logging out');
});

// auth with google - attache to the router
router.get('/google', (req, res) => {
    //handle with passport
    res.send('logging in with google');
});

// export router and all attahced actions
module.exports = router;