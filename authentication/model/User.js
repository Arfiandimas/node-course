const { Sequelize, Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
    },
    token: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName : true,
    timestamps: false
});

User.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password, 8);
    const token = jwt.sign({ id: user }, process.env.JWT_SECRET);
    
    user.token = token
});

User.beforeUpdate(async (user) => {
    if (user.password) {
        user.password = await bcrypt.hash(user.password, 8);
    }
});

User.generateAuthToken = async (user_id) => {
    const user = await User.findOne({
        where: {
            id: user_id
        }
    });
    const token = jwt.sign({ id: user }, process.env.JWT_SECRET);
    user.update({
        token: token
    })

    return token
}

User.findByCredentials = async (email, password) => {
    const user = await User.findOne({
        where: {
            email: email
        }
    });

    if (!user) {
        throw new Error('User belum terdaftar')
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        throw new Error('password salah')
    }

    return user
}

module.exports = User;