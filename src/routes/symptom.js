const express = require('express')

const SymptomController = require("../controller/symptom.controller")
const authenticationToken = require("../middleware/auth")
const router = express.Router()
// SYMPTOM
router.get('/symptoms', SymptomController.getAllSymptom)
router.get('/symptoms/:id_gejala', SymptomController.getSymptomById)
router.post('/symptoms', authenticationToken, SymptomController.postNewListSymptom)
router.put('/symptoms/:id_gejala', authenticationToken, SymptomController.putNewListSymptom)
router.delete('/symptoms/:id_gejala', authenticationToken, SymptomController.deleteListSymptom)
// RULES
router.get('/rules', SymptomController.getAllRules)
router.post('/rules', authenticationToken, SymptomController.postNewRules)
router.delete('/rules/:kode_aturan', authenticationToken, SymptomController.deleteRules)
router.delete('/symptoms/rules/:id', authenticationToken, SymptomController.deleteSingleRulesById)
router.get('/rules/:kode_aturan', SymptomController.getRulesById)
router.put('/rules/:id', authenticationToken, SymptomController.putNewRules)
// RELATION
router.get('/relation', SymptomController.getRelationSymptom)
router.get('/relation/:id_gejala', authenticationToken, SymptomController.getRelationById)
router.post('/relation', authenticationToken, SymptomController.postRelationSymptom)
router.put('/relation/:id_gejala', authenticationToken, SymptomController.putNewRelation)
router.delete('/relation/:id_gejala', authenticationToken, SymptomController.deleteRelations)

module.exports = router