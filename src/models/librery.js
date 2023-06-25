const { Model, DataTypes } = require('sequelize');
const { libreryDbInstance } = require('../db/secualize-config.js');

class Library extends Model { }

Library.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull:false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location:{
        type: DataTypes.STRING,
        allowNull: false
    },
    phone:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize:libreryDbInstance,
    modelName:'libraries',
    createdAt:false,
    updatedAt:false
});
module.exports={Library}