const express = require('express')
const router = express.Router();

const sucursalesController = require('../controllers/sucursalesController')

router.get('/', sucursalesController.sucursal)

module.exports = router;