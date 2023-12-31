const express = require('express')
const userController = require('../controllers/user_controllers')
const {isAuthenticated}=require('../middlewares/authentication')

const router = express.Router()

router.get("/obtener-todos",isAuthenticated, userController.getAllUsers)
router.get("/obtener-por-id/:id", userController.getUserById)
router.post("/crear", userController.createUser)
router.put("/editar/:id", userController.ediUser)
router.delete("/eliminar/:id", userController.deleteUser)
router.post("/login",userController.login)

module.exports = router