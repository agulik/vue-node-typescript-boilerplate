import { Request, Response } from "express"
import db from "../db"

export const getAllRecipes = async (req: Request, res: Response) => {
  try {
    const values = await db.query("SELECT * from recipes")
    res.send(values.rows)
  } catch (error) {
    console.log(error.stack)
  }
}