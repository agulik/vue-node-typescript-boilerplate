import { Request, Response } from "express"
import * as Recipe from "../models/recipe"

export const fetchAllRecipes = async (req: Request, res: Response) => {
  try {
    return await Recipe.getAllRecipes(req, res)
  } catch (error) {
    console.log(error)
  }
}