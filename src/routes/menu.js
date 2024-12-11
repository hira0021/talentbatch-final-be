const express = require('express')

const MenuController = require('../controllers/menu')

const router = express.Router()

router.get('/', MenuController.getAllMenu)
router.get('/:menuId', MenuController.getMenuById)

module.exports = router