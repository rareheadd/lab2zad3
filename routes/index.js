
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('home');
});


router.get('/student', (req, res) => {
    res.render('student');
});


router.post('/student', (req, res) => {
    // Tutaj obsłuż przekierowanie z formularza studenta
    res.redirect('/');
});

module.exports = router;
