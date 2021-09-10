import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import morgan from 'morgan';
import cors from 'cors';

import database from './models';
import routes from './routes';

const server = new express();

const pathEnv = process.env.NODE_ENV === "development" ? ".env.dev" : ".env";
dotenv.config({ path: path.resolve(__dirname, '..', pathEnv) });

// Middlewares
server.use(
    express.urlencoded({ limit: '25mb', extended: true }),
    express.json(),
    cors(),
    morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'combined'),
    (err, req, res, next) => { 
        console.error(err.stack);
        res.status(500).send('Something broke!');
    }
); 

// Banco de Dados
server.set('database', database);
 
// Rotas API
server.use('/api/', routes); 

// Definindo porta para conexões
const port = process.env.PORT || 3000;
server.listen(port, () => {
    const nodeEnv = process.env.NODE_ENV.toUpperCase();
    console.log(`[${nodeEnv}] App is running on ${process.env.HOSTNAME}:${port}`)
});

export default server;