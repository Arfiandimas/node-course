const express = require('express');

const db = require('./../config/database');
const cors = require('cors');
const Router = require('./../router/router.js');
const User = require('./../model/User');

const app = express();
const port = 6969;

app.use(express.json());
app.use(cors());

try {
    db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.use(Router);

app.listen(port, () => console.log(`Server mlaku ning http://localhost:${port}`));