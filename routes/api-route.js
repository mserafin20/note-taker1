const router = require('express').Router();
const db = require('../db/db.json');
const uuid = require('../helpers/uuid');
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'))
});

router.get('/notes', (req, res) => res.json(db));


router.post('/notes', (req, res) => {
    const {title, text} = req.body;

        if(title && text) {
            const note = {title, text, id: uuid()}
        

        db.push(note);

        const noteStringify = JSON.stringify(db);

        fs.writeFile(`./db/db.json`, noteStringify, (err) => 
            err
                ? console.log(err)
                : console.log(
                    `Note for ${note.title} has been saved!`
                )
        );
        const response = {status: "successful", body: note};
        console.log(response);
        res.status(201).json(response);
                } else {
                    res.status(500).json("Encountered an error posting note");
                }

            });

            // router.delete('/notes/:id', (req, res) => {
            //     const idDelete = req.params.id;
            //     const dbDelete = db.filter((note) => note.id !== idDelete);
            //     const noteStringify = JSON.stringify(dbDelete);

            //     fs.writeFile(`./db/db.json`, noteStringify, (err) => {
            //         err
            //             ? console.error(err)
            //             : console.log(
            //                 'Note Deleted'
            //             )
            //         res.send();
            //     });
            // });

            module.exports = router;
