import { Pool } from "pg"
import keys from "../../keys"

const db = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
} as any)

db.on("error", () => console.log("Lost PG connection"))

export default db