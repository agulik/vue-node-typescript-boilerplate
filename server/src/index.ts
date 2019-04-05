import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
// import morgan from "morgan"

import db from "./db"
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

const initializeDb = async () => {
  await db.query("DROP TABLE IF EXISTS users").catch(err => console.log(err))

  await db
    .query(
      "CREATE TABLE IF NOT EXISTS users(id SERIAL, FirstName varChar(255), LastName varchar(255), Email varchar(255), PRIMARY KEY (id))"
    )
    .catch(err => console.log(err))
        await db.query("CREATE TABLE IF NOT EXISTS recipes(id SERIAL, Title varChar(255), ImageSource varchar(255), Link varchar(255), PRIMARY KEY (id))").catch(err => console.log(err))
  await db.query(
    "INSERT INTO users(id, FirstName, LastName, Email) VALUES($1, $2, $3, $4)",
    [1, "Andrew", "Test", "andrew@test.com"]
  )
  await db.query(
    "INSERT INTO recipes(id, Title, ImageSource, Link) VALUES($1, $2, $3, $4)",
    [1, "Sweet Potato Surprise", "https://cdn.loveandlemons.com/wp-content/uploads/2012/11/3.jpg", "https://www.loveandlemons.com/sweet-potato-surprise/"]
  )
}

initializeDb()

app.listen(4000, () => console.log("Server is listening on port 4000"))