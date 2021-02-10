import { Router, Request, Response, request } from 'express';
// import middlewares from '../middlewares';
const route = Router();

export default (app: Router) => {
    app.use('/', route);

    route.get('/test', (req: Request, res: Response) => {
        return res.json({ test: 'working1123' }).status(200);
    })
};
