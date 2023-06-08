const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4444;

// Middleware
app.use(express.static('public'));



// Listening for requests
app.listen(PORT, () => 
    console.log(`Express note taker app listening at http://localhost:${PORT}`)
);