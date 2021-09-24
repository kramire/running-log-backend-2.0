import express from 'express';
import * as user from './controllers/user.controller';
import * as run from './controllers/run.controller';
const router = express.Router();

// user
router.get('/user/:id', user.getUser);
router.post('/user', user.saveUser);
router.patch('/user/:id', user.updateUser);
router.delete('/user/:id', user.deleteUser);

// run
router.get('/run/:id', run.getRun);
router.post('/run', run.saveRun);
router.patch('/run/:id', run.updateRun);
router.delete('/run/:id', run.deleteRun);

// runs
router.get('/run', run.getRuns);

export default router;
