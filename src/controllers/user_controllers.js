const {use}=require('passport')
const userService=require('../services/user_services');

//Traer todos los usuarios
async function getAllUsers(req,res){
  const users=await userService.getAll();
  res.status(200).send(users);
};

//Traer un usuario por id

async function getUserById(req,res,next){
  const {id}=req.params;

  try {
    const user= await userService.getById(id);
    res.status(200).send(user)
  } catch (error) {
    next(error);
  }
}

//Crear un usuario
async function createUser(req,res ){
  const {name,lastname,email,password}=req.body;

  const user= await userService.createUser(name,lastname,email,password);

  res.status(200).send(user);
}

//Editar un usuario

async function ediUser(req,res){
  const {id}=req.params;
  const {name,lastname,email}=req.body;

  const user=await userService.editUser(id,name,lastname,email);
  
  res.status(200).send(user);
}

//Eliminar Usuario

async function deleteUser(req,res){
  const {id}=req.params;

  await userService.deleteUser(id);

  res.status(200).send(`EL usuario con el id: ${id}, ha sido eliminado correctamente`);
}

//Login 

async function login(req,res,next){
  const {email,password}=req.body;
  try {
    
 const result= await userService.login(email,password);
 res.status(200).send(result);
  } catch (error) {
    next(error);
  }

}

module.exports={getAllUsers,getUserById,createUser,ediUser,deleteUser,login}