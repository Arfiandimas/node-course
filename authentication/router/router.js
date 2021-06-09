const express = require('express');

const User = require('./../model/User');

const { getUsers, createUser } = require('./../Controllers/UserController');

const router = express.Router();

router.get('/user', async (req, res) => {
    try {
        const user = await User.findAll()
        // const user = await getUsers;
        res.send(user);
    } catch (error) {
        console.log(error);
    }
});

// router.post('/user', async (req, res) => {
//     await 
// })

module.exports = router;