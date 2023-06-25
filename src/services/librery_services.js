const {Librery}=require('../models/librery');

//Busqueda de todas las bibliotecas

async function getAll(){
    const librerylist=await Librery.findAll();
    return librerylist;
}

// Busqueda de libreria por id

async function getById(id){
    const lib_id= await Librery.findByPk(id);

    if(lib_id==null){
        throw new Error("Biblioteca no encontrada")
    }return lib_id 
}

//Crear Biblioteca

async function createLib(name,location ,phone){
    const librery= new Librery();
    librery.name=name;
    librery.location=location;
    librery.phone=phone;

    const libCreate=await librery.save();
    return libCreate;
}

// Editar biblioteca
  async function updateLib (id, name, location, phone) {
    const librery=await getById(id);

    if(name){
        librery.name=name;
    }
    if(location){
        librery.location=location;
    }
    if(phone){
        librery.phone=phone;
    }
    const UpdateLibrery=await librery.save();
    return UpdateLibrery; 
  }

  //Eliminar biblioteca

  async function deleteLib(id){
    const librery= await getById(id)

    await librery.destroy();
  }

  module.exports={getAll,getById,createLib,updateLib,deleteLib};