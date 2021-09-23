import { Request, Response } from 'express';
import sequelize from '../models';

const User = sequelize.models.User;
const Run = sequelize.models.Run;

export const getUser = async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) throw new Error(`No user found with id ${id}.`);
    res.status(200).send(user);
  } catch (e: any) {
    res.status(404).send(e.message);
  }
};

export const saveUser = async (req: Request, res: Response) => {
  const user = req.body;
  try {
    const savedUser = await User.create({ ...user });
    res.status(201).send(savedUser);
  } catch (e: any) {
    res.status(404).send(e.message);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  try {
    await User.update(data, { where: { id } });
    const updatedUser = await User.findByPk(id);
    res.status(200).send(updatedUser);
  } catch (e: any) {
    res.status(404).send(e.message);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await User.destroy({ where: { id } });
    res.status(204).send();
  } catch (e: any) {
    res.status(404).send(e.message);
  }
};

export const saveRun = async (req: Request, res: Response) => {
  const { id } = req.params;
  const run = req.body;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error(`No user found with id ${id}.`);
    }
    const savedRun = await Run.create({ ...run, UserId: id });
    res.status(201).send(savedRun);
  } catch (e: any) {
    res.status(404).send(e.message);
  }
};
