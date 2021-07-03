import { Request, Response } from 'express';

export const getRun = (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  // findOne user by id
  const run = {};
  res.status(200).send(run);
};

export const saveRun = (req: Request, res: Response) => {
  const { run } = req.body;
  // save new user
  const savedRun = {};
  res.status(201).send(savedRun);
};

export const updateRun = (req: Request, res: Response) => {
  const { id } = req.params;
  const { data } = req.body;
  // update user by id
  const updatedRun = {};
  res.status(201).send(updatedRun);
};

export const deleteRun = (req: Request, res: Response) => {
  const { id } = req.params;
  // delete run by id
  res.status(201).send();
};

export const getDailyRuns = (req: Request, res: Response) => {
  // const { id } = req.params;
  // delete run by id
  res.status(201).send();
};

export const getWeeklyRuns = (req: Request, res: Response) => {
  // const { id } = req.params;
  // delete run by id
  res.status(201).send();
};
