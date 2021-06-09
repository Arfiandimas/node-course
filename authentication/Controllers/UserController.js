const User = require('./../model/User');

const getUsers = async (req, res) => {
    try {
        const user = await User.findAll()
        res.send(user);
    } catch (error) {
        console.log(error);
    }
}

const createUser = async (req, res) => {
    try {
        await User.create(req.body);
        res.json({
            "message": "Product Created"
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = { getUsers, createUser };