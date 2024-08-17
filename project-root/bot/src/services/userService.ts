import { Database } from 'sqlite3';

const db = new Database('users.db');

export const getUserHeroes = (userId: number) => {
	return new Promise((resolve, reject) => {
		db.all('SELECT * FROM heroes WHERE userId = ?', [userId], (err, rows) => {
			if (err) reject(err);
			resolve(rows);
		});
	});
};

export const addUserHero = (userId: number, heroId: number) => {
	return new Promise((resolve, reject) => {
		db.run('INSERT INTO heroes (userId, heroId) VALUES (?, ?)', [userId, heroId], (err) => {
			if (err) reject(err);
			resolve();
		});
	});
};
