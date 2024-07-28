const express = require('express')

const SymptomController = require("../controller/symptom.controller")
const authenticationToken = require("../middleware/auth")
const router = express.Router()
// SYMPTOM
router.get('/symptoms', SymptomController.getAllSymptom)
router.get('/symptoms/:id_gejala', SymptomController.getSymptomById)
router.post('/symptoms',authenticationToken, SymptomController.postNewListSymptom)
router.put('/symptoms/:id_gejala',authenticationToken, SymptomController.putNewListSymptom)
router.delete('/symptoms/:id_gejala',authenticationToken, SymptomController.deleteListSymptom)
// RULES
router.get('/rules', SymptomController.getAllRules)
router.post('/rules', SymptomController.postNewRules)
router.delete('/rules/:kode_aturan', SymptomController.deleteRules)
router.delete('/symptoms/rules/:id', SymptomController.deleteSingleRulesById)
router.get('/rules/:kode_aturan', SymptomController.getRulesById)
router.put('/rules/:id', SymptomController.putNewRules)
// RELATION
router.get('/relation', SymptomController.getRelationSymptom)
router.get('/relation/:id_gejala', SymptomController.getRelationById)
router.post('/relation', SymptomController.postRelationSymptom)
router.put('/relation/:id_gejala', SymptomController.putNewRelation)
router.delete('/relation/:id_gejala', SymptomController.deleteRelations)

module.exports = router