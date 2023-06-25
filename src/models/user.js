const { Model, DataTypes } = require('sequelize');
const { libreryDbInstance } = require('../db/secualize-config');

class User extends Model{}

User.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }

},{
    sequelize:libreryDbInstance,
    modelName:'users',
    createdAt:false,
    updatedAt:false,
});
module.exports={User}