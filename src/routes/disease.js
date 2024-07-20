const express = require('express')

const diseaseController = require("../controller/disease.controller")
const authenticationToken = require("../middleware/auth")
const router = express.Router()

router.get('/disease', diseaseController.getAllDisease)
router.get('/disease/:id_penyakit', diseaseController.getDiseaseById)
router.post('/disease', authenticationToken, diseaseController.postDisease)
router.put('/disease/:id_penyakit', authenticationToken, diseaseController.putDisease)
router.delete('/disease/:id_penyakit', authenticationToken, diseaseController.deleteDisease)

module.exports = router