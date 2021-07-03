import { Request, Response } from 'express';

export const getUser = (req: Request<{ id: string }>, res: Response) => {
  const { id } = req.params;
  // findOne user by id
  const user = {};
  res.status(200).send(user);
};

export const saveUser = (req: Request, res: Response) => {
  const { user } = req.body;
  // save new user
  const savedUser = {};
  res.status(201).send(savedUser);
};

export const updateUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const { data } = req.body;
  // update user by id
  const updatedUser = {};
  res.status(201).send(updatedUser);
};

export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params;
  // delete user by id
  res.status(201).send();
};
