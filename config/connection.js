// Imports the Sequelize constructor from the library
const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

// Connects to database, either via JawsDB or local mySQL
if (process.env.JAWSDB_URL) {
	sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
	sequelize = new Sequelize(
		process.env.DB_NAME,
		process.env.DB_USER,
		process.env.DB_PASSWORD,
		{
			host: 'localhost',
			dialect: 'mysql',
			port: 3306,
		}
	);
}

// Exports connection
module.exports = sequelize;
