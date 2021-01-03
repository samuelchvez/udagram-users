import {Router, Request, Response} from 'express';
import { v4 } from 'uuid';

import {User} from '../models/User';
import {AuthRouter} from './auth.router';

const router: Router = Router();

router.use('/auth', AuthRouter);

router.get('/');

router.get('/:id', async (req: Request, res: Response) => {
  const pid = v4();
  const {id} = req.params;
  console.log(`START - GET - ${new Date().toLocaleString()} - ${pid} - /users/${id}`);
  const item = await User.findByPk(id);
  console.log(`END - GET - ${new Date().toLocaleString()} - ${pid} - /users/${id}`);
  res.send(item);
});

export const UserRouter: Router = router;
