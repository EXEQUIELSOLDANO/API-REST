const { Model, DataTypes } = require('sequelize');
const { libreryDbInstance } = require('../db/secualize-config.js');

class Book extends Model { }

Book.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ISBN:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author:{
        type: DataTypes.STRING,
        allowNull: false
    },
    year:{
        type: DataTypes.STRING,
        allowNull: false
    },
    librery:{
        type: DataTypes.INTEGER
    }
},{
    sequelize:libreryDbInstance,
    modelName:'books',
    createdAt:false,
    updatedAt:false
});
module.exports={Book}