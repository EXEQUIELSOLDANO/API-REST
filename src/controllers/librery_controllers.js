const {use}=require('passport')
const libreyService=require('../services/librery_services')

//Traemos todos las librerias

async function getAllLibreries(req,res){
    const libreries=await libreyService.getAll();
    res.status(200).send(libreries)

}

//Traer una libreria por id
async function getLibreriesById(req,res,next){
    const {id}=req.params;
    try {
        const librery=await libreyService.getById(id);
        res.status(200).send(librery)
    } catch (error) {
        next(error)
    }
}

//Crear una libreria
async function createLibrery(req,res){
    const{name,location,phone}=req.body;
    const librery=await libreyService.createLib(name,location,phone);
    res.status(200).send(librery);
}

//Editar una Libreria
async function updateLibrery(req,res){
    const {id}=req.params;
    const {name,location,phone}=req.body;

    const librery=await libreyService.updateLib(id,name,location,phone)

    res.status(200).send(librery)
}

//Eliminar una libreria

async function deleteLibrery(req,res){
    const {id}=req.params;
    await libreyService.deleteLib(id);

    res.status(200).send(`La libreria con el id:${id}, ha sido eliminada correctamente`)
}
module.exports={getAllLibreries,getLibreriesById,createLibrery,updateLibrery,deleteLibrery}

