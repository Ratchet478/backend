import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { connectDB } from './src/config/db.js';
import { userRoutes } from '#routes/user.routes';

connectDB();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const router = express.Router();


app.use('/users', userRoutes);
app.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || 'Unexpected error');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT} is running`);
});