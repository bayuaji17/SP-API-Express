const express = require('express')

const authControoler = require("../controller/auth.controller")

const router = express.Router()

router.post('/register', authControoler.postNewAdmin)
router.post('/login', authControoler.postLoginAdmin)

module.exports = router