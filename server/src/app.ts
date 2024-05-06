import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import router from './routes';
const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(
    cors({
        allowedHeaders: ['Content-Type'],
        origin: ["http://localhost:3001", "http://localhost:4173", "https://verification-application.suyashshrestha.com.np/"],
        credentials: true
    })
)

app.use('/api/v1', router);

export default app;