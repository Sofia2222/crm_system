require('dotenv').config();
const {authRouter} = require("./api/routers");
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/auth', authRouter);

function start() {
    app.listen(PORT, () => {console.log(`server start on ${PORT} port`)});
}

start();
