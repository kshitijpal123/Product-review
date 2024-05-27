const express = require('express')
const router = express.Router();
const authService = require('../component/authentication/authentication.controller')
const reviewService = require('../component/review/review.controller')

router.post('/signup', authService.signUp)
router.get('/login', authService.logIn)
router.post('/review', reviewService.overallRating)
router.get('/review', reviewService.ratingSummary)

module.exports = router;