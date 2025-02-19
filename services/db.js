
import Database from 'better-sqlite3'; 
const db = new Database('users.db'); 
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT  NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    plan TEXT NULL,
    api_key TEXT NULL,
    image TEXT
  )
`);

export default db;