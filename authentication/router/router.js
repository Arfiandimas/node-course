const express = require('express');

const auth = require('./../middleware/auth');

const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('./../Controllers/UserController');
const { login } = require('./../Controllers/LoginController');

const router = express.Router();

router.get('/users', auth, getUsers);
router.get('/user/id=:id', auth, getUserById);
router.post('/user', createUser);
router.put('/user/id=:id/update', auth, updateUser);
router.delete('/user/id=:id/delete', auth, deleteUser);

router.post('/login', login);

module.exports = router;