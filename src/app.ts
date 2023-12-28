// src/index.js
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './app/routes';
import globalErrorHandler from './middlewares/globalErrorhandler';
import notFound from './middlewares/notFound';

dotenv.config();

const app: Express = express();
//parsers
app.use(express.json());
app.use(cors());

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  const a = 7;
  res.send(`Test: ${a}`);
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
