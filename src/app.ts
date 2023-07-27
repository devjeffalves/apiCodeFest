    //file.push(user);
const express = require("express");
const app = express();

app.use(express.json());

import usersRouter from './routes/usersRouter';

app.use('/api/', usersRouter);

export default app;
