const express= require('express')
const libreryControllers=require('../controllers/librery_controllers');

const router= express.Router();

router.get("/obtener-todos", libreryControllers.getAllLibreries)
router.get("/obtener-por-id/:id",libreryControllers.getLibreriesById);
router.post("/crear",libreryControllers.createLibrery);
router.put("/editar/:id", libreryControllers.updateLibrery);
router.delete("/eliminar/:id",libreryControllers.deleteLibrery);

module.exports=router;