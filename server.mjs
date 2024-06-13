import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.mjs';
import userRouter from './routes/user.routes.js';
import propertyRouter from './routes/property.routes.js';
import messageRouter from './routes/message.routes.js';
import reviewRouter from './routes/review.routes.js';
import loginRouter from './routes/login.routes.js';

dotenv.config();

const app = express();
const port = 8080;
const API_ROOT = '/api/v1';

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', (req, res) => {
    res.send({ message: 'Backend is running' });
});

app.use(`${API_ROOT}/users`, userRouter);
app.use(`${API_ROOT}/properties`, propertyRouter);
app.use(`${API_ROOT}/messages`, messageRouter);
app.use(`${API_ROOT}/reviews`, reviewRouter);
app.use(`${API_ROOT}/login`, loginRouter);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!!');
});

// Environment Variable Check
const requiredEnvVariables = ['MONGODB_URL' /* add other required variables here */];
for (const variable of requiredEnvVariables) {
    if (!process.env[variable]) {
        console.error(`Missing environment variable: ${variable}`);
        process.exit(1);
    }
}

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(port, () => console.log(`Server is running on port http://localhost:${port}`));
    } catch (error) {
        console.error(error);
    }
}

startServer();