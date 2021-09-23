import { Request, Response } from 'express';
import sequelize from '../models';

const Run = sequelize.models.Run;

export const getRun = async (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  try {
    const run = await Run.findByPk(id);
    res.status(200).send(run);
  } catch (e: any) {
    res.status(404).send(e.message);
  }
};

export const updateRun = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    await Run.update(data, { where: { id } });
    const updatedRun = await Run.findByPk(id);
    res.status(200).send(updatedRun);
  } catch (e: any) {
    res.status(404).send(e.message);
  }
};

export const deleteRun = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Run.destroy({ where: { id } });
    res.status(204).send();
  } catch (e: any) {
    res.status(404).send(e.message);
  }
};
