const express = require('express')

const SymptomController = require("../controller/symptom.controller")
const authenticationToken = require("../middleware/auth")
const router = express.Router()

router.get('/symptoms', SymptomController.getAllSymptom)
router.get('/symptoms/:id_gejala', SymptomController.getSymptomById)
router.post('/symptoms',authenticationToken, SymptomController.postNewListSymptom)
router.put('/symptoms/:id_gejala',authenticationToken, SymptomController.putNewListSymptom)
router.delete('/symptoms/:id_gejala',authenticationToken, SymptomController.deleteListSymptom)
router.get('/rules', SymptomController.getAllRules)

module.exports = router