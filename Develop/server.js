const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4444;
const routes = require('./routes');

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(routes);



// GET request for index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

// GET request for notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// Listening for requests
app.listen(PORT, () => 
    console.log(`Express note taker app listening at http://localhost:${PORT}`)
);