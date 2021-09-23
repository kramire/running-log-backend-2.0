import express from 'express';
import * as user from './controllers/user.controller';
import * as run from './controllers/run.controller';
const router = express.Router();

// user
router.get('/user/:id', user.getUser);
router.post('/user', user.saveUser);
router.patch('/user/:id', user.updateUser);
router.delete('/user/:id', user.deleteUser);
router.post('/user/:id/run', user.saveRun);

// single run
router.get('/run/:id', run.getRun);
router.patch('/run/:id', run.updateRun);
router.delete('/run/:id', run.deleteRun);

export default router;
