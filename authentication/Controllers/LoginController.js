const User = require('./../model/User');

const login = async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await User.generateAuthToken(user.id);
        res.send({user});
    } catch (error) {
        console.log(error);
    }
}
module.exports = { login };