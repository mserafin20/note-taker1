const router = require('express').Router();
const apiRoute = require('./api-route');
const htmlRoute = require('./html-route');

router.use('/api', apiRoute)
router.use('/', htmlRoute)


// router.get('/works', (req, res) => {
//     res.send('Response')
// });

module.exports = router;