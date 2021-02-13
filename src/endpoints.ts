import axios, { AxiosResponse } from 'axios';
import { Request, Response, Router } from 'express';

const endpoints: Router = Router();

endpoints.get('/hello', (req: Request, res: Response) => {
    res.json({ message: 'Hello world' });
});

endpoints.get('/test', async (req: Request, res: Response) => {
    try {
        const test: AxiosResponse<any> = await axios.get('https://www.google.com');
        res.json({ result: test.data });
    } catch (error: any) {
        res.status(500).json({ error: error.toString() });
    }
});

export { endpoints };
