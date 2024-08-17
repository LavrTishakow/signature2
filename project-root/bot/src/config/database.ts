import { Database } from 'sqlite3';

const db = new Database('users.db');

db.serialize(() => {
	db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT)');
	db.run('CREATE TABLE IF NOT EXISTS heroes (userId INTEGER, heroId INTEGER)');
});

export default db;
