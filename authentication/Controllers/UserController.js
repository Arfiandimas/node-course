const User = require('./../model/User');

const getUsers = async (req, res) => {
    try {
        const user = await User.findAll({order:[
            ['id', 'DESC']
        ]});
        res.send(user);
    } catch (error) {
        console.log(error);
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id
            }
        })
        res.send(user);
    } catch (error) {
        console.log(error);
    }
}

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json({
            "message" : "User Created",
            "data" : user
        });
    } catch (err) {
        console.log(err);
    }
}

const updateUser = async (req, res) => {
    try {
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        const user = await User.findOne({
            where: {
                id: req.params.id
            }
        })
        res.json({
            "message" : "User Updated",
            "data" : user
        });
    } catch (error) {
        console.log(error);
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id
            }
        })
        await User.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({
            "message" : "User Deleted",
            "data" : user
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };