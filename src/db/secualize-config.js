const { Sequelize } = require('sequelize')

const libreryDbInstance=new Sequelize("Librery","root","root",{
  host:"localhost",
  dialect:"mysql",
})


 /*const libreryDbInstance = new Sequelize({
  host: "localhost",
  database: "Librery",
  username: "root",
  password: "root",
  port: 3306,
  dialect: "mysql"
})*/


module.exports =  {libreryDbInstance};