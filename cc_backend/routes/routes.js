const express = require('express');
const router = express.Router();

const  { 
    createSpecial,
    updateSpecial,
    getSpecial,
    getAvailTime,
    seeAllSlots, 
    bookTimeSlot
} = require('../controllers/controllers')

router.post('/createSpecial', createSpecial);
router.post('/updateSpecial', updateSpecial);
router.get('/getSpecial', getSpecial);
router.post('/getAvailTime', getAvailTime);
router.post('/bookTimeSlot', bookTimeSlot);
router.get('/seeAllSlots', seeAllSlots);
router.get('/', (req, res) => {res.send('Hello World')});

module.exports = router;