import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { connectDB } from './src/config/db.js';

connectDB();

const PORT = process.env.PORT || 3000;
const app = express();

const user = import('./src/api/models/User.js')

const router = express.Router();

const getUsers = async (req, res) => {
    try {
        const users = await user.find();
        return res.status(200).json(users);
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

router.get('/users', getUsers);

app.use('/', router);
app.use((req, res, next) => {
    return res.status(404).json("Not Found");
});

app.listen(3000, () => {
    console.log("http://localhost:3000 is running");
});