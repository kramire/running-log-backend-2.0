import { Request, Response } from 'express';
import sequelize from '../models';
import dayjs from 'dayjs';
import { Op } from 'sequelize';
import { formatDateQuery } from '../lib/utils';

const Run = sequelize.models.Run;
const User = sequelize.models.User;

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

export const getRuns = async (req: Request, res: Response) => {
  const params: { userId?: string; start?: string; end?: string } = req.query;

  const now = new Date();
  const start = formatDateQuery(dayjs(now).subtract(2, 'month'), params.start);
  const end = formatDateQuery(dayjs(now), params.end);

  try {
    const runs = await Run.findAll({
      where: {
        UserId: params.userId,
        date: {
          [Op.between]: [start, end]
        }
      },
      order: [['date', 'ASC']]
    });
    res.status(200).send(runs);
  } catch (e: any) {
    res.status(404).send(e.message);
  }
};

export const saveRun = async (req: Request, res: Response) => {
  const run = req.body;
  const { UserId } = run;
  try {
    const user = await User.findByPk(UserId);
    if (!user) {
      throw new Error(`No user found with id ${UserId}.`);
    }
    const savedRun = await Run.create({ ...run, date: dayjs(run.date) });
    res.status(201).send(savedRun);
  } catch (e: any) {
    console.log(e);
    res.status(404).send(e.message);
  }
};
