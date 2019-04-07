import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
// import morgan from "morgan"

import { initializeDb } from "./db/initialize-db"
import * as homeController from "./controllers/home"
import * as userController from "./controllers/user"
import * as recipeController from "./controllers/recipe"

const app = express()

// Express configuration
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(morgan("dev"))

// Primary app routes
app.get("/", homeController.index)
app.get("/users/all", userController.fetchAllUsers)
app.get("/recipes/all", recipeController.fetchAllRecipes)

initializeDb()

app.listen(4000, () => console.log("Server is listening on port 4000"))