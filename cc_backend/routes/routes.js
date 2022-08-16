const express = require('express');
const router = express.Router();

const  { 
    bookByInterest,
    getInterests,
    getBookingTable,
    getMentorTable,
    getPremiumMentor
} = require('../controllers/controllers')

router.post('/bookByInterest', bookByInterest);
router.get('/getInterests', getInterests);
router.get('/getBookingTable', getBookingTable);
router.get('/getMentorTable', getMentorTable);
router.post('/getPremiumMentor', getPremiumMentor);

router.get('/', (req, res) => {res.send('Hello World')});

module.exports = router;