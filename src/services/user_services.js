// Imports
const {User}=require('../models/user');
const jwt=require('jsonwebtoken');

//Busqueda  de todos los usuarios
async function getAll(){
  const userList=await User.findAll();
  return userList;
}

//Busqueda usuario por id
async function getById(id){
  const user = await User.findByPk(id);

  if(user ==null){
    throw new Error("Usuario no encongtrado")
  } 
  return user;
}

//Crear usuario

async function createUser(name,lastname,email,password){
  const user=new User();
  user.name=name;
  user.lastname=lastname;
  user.email=email;
  user.password=password;

  const userCreated=await user.save();
  return userCreated;
}

//Editar Usuario

async function editUser(id,name,lastname,email){
  const user= await getById(id);

  if(name){
    user.name=name;
  }
  if(lastname){
    user.lastname=lastname;
  }
  if(email){
    user.email=email;
  }
   const userEdit= await user.save();
   return userEdit;
}

//Eliminar usuario

async function deleteUser(id){
  const user = await getById(id);

  await user.destroy();
}

//Login de Usuario

async function login(email,password){
  const user=await User.findOne({
    where:{
      email:email,
      password:password
    }
  })
  if(!user){
    throw new Error("el email o la contraseña son incorrectos")
  }

  const token=jwt.sign({
    id:user.id,
    email:user.email,
    name:user.name
  },'ClaveSecreta')
  return{
    accesToken:token
  }
}

module.exports={getAll,getById,createUser,editUser,deleteUser,login};