const express = require('express');
const UserController = require('../controllers/UserController')
const router = express.Router();

router.post('/admin/login', (req, res) => {
    UserController.doAdminLogin(req, res)
})
module.exports = router