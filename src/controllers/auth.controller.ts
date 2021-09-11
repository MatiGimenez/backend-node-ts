import { Request, Response } from "express";
import { UserLogin } from "../models/dtos/user";

export const login = (req: Request, res: Response): void => {
  const { username, password }: UserLogin = req.body;
  //validar datos
};
