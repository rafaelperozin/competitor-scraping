const express = require('express');
const authRoutes = require('./routes/auth-routes');

// set port
const PORT = 3000;

const app = express();

// set up view engine
app.set('view engine', 'ejs');

// set up routes
app.use('/auth', authRoutes);

// create home route
app.get('/', (req, res) => {
    // render a template
    res.render('home');
});

const server = app.listen(PORT, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Listening for request at ',host, port);
});