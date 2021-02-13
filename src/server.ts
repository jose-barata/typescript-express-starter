import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import { endpoints } from './endpoints';

dotenv.config();

if (!process.env.PORT) {
    console.log('Server not started. Environment config not found...');
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT, 10);

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(endpoints);

app.listen(PORT, (): void => {
    console.log(`Server started. Listening on port ${PORT}`);
});
