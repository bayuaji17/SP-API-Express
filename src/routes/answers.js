const express = require('express')

const answerController = require("../controller/answers.controller")
const router = express.Router()


router.get('/questions', answerController.getAllQuestions)

module.exports = router