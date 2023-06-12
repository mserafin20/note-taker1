const router = require('express').Router();
const db = require('../db/db.json');
const uuid = require('../helpers/uuid');
const fs = require('fs');
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))
});

router.get('./notes', (req, res) => res.json(db));


router.post('./notes', (req, res) => {
    const {title, text} = req.body;
        if(title && text) {
            const note = {title, text, id: uuid()}
        };

        db.push(note);

        const noteStringify = JSON.stringify(db);
})
