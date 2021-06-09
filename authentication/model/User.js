const { Sequelize, Model, DataTypes } = require('sequelize');

const db = require('./../config/database');

const User = db.define('users', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName : true,
    timestamps: false
});

module.exports = User;