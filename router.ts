import express from 'express';
import * as users from './controllers/user.controller';
const router = express.Router();

// user
router.get('/user/:id', users.getUser);
router.post('/user', users.saveUser);
router.patch('/user/:id', users.updateUser);
router.delete('/user/:id', users.deleteUser);

// single run
router.get('/run/:id', (req, res) => res.send());
router.post('/run', (req, res) => res.send());
router.patch('/run/:id', (req, res) => res.send());
router.delete('/run/:id', (req, res) => res.send());

// many runs
router.get('/run/daily', (req, res) => res.send());
router.get('/run/weekly', (req, res) => res.send());

export default router;
