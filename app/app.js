import 'dotenv/config'
import {authRouter} from './api/routers/index.js';
import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser'
// import connect from "./database/connect.js";
// import {up, down} from './database/migrations/20240211124552-general_database.js';
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(cookieParser())
app.use('/auth', authRouter);

const start = async () => {
    // await down(connect.getQueryInterface())
    // await up(connect.getQueryInterface())
    app.listen(PORT, () => {console.log(`server start on ${PORT} port`)});
}

start();