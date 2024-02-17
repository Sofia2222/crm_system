import 'dotenv/config'
import {authRouter} from './api/routers/index';
import * as express from 'express';


const app = express();
const PORT: number = 3000;

app.use(express.json());
app.use('/auth', authRouter);

function start():void {
    app.listen(PORT, () => {console.log(`server start on ${PORT} port`)});
}

start();