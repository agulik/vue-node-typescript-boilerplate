import db from "../db"

export const initializeDb = async () => {
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
      [1, "Sweet Potato Surprise", "https://cdn.loveandlemons.com/wp-content/uploads/2012/11/3.jpg", "https://www.loveandlemons.com/sweet-potato-surprise/"],
    )
  }