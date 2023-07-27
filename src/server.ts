import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;

import app from './app';

//Iniciar servidor => função anônima
app.listen(PORT, () => console.log(`Running on port 3000`));