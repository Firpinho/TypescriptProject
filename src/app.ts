import express from 'express';
import { databaseConnection } from './config/connection';
import config from './config/config';
import { errorHandler } from './middlewares/error.handler';
import router from './routes/index.router';


const app = express();

app.use(express.json());

databaseConnection().then(() => console.log("Database connected.")).catch((error) => console.log('Database connection error : ', error));

const PORT = config.PORT;

app.use('/api', router);

app.use(errorHandler)
app.listen(PORT, () => console.log('Server on port : ', PORT));