import 'dotenv/config'
import {authRouter} from './api/routers/index';
import * as express from 'express';
// import connect from "./database/connect";
// import {up, down} from './database/migrations/20240211124552-general_database';
const app = express();
const PORT: number = 3000;

app.use(express.json());
app.use('/auth', authRouter);

const start = async () => {
    // await down(connect.getQueryInterface())
    // await up(connect.getQueryInterface())
    app.listen(PORT, () => {console.log(`server start on ${PORT} port`)});
}

start();