// Import Express, Sequelize, Session, Handlebars, and Routes
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Import controllers and connection
const routes = require('./controllers/api/api');
const sequelize = require('./config/connection');

// Use Express and PORT
const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions with cookies
const sess = {
	secret: 'Super secret secret',
	cookie: {
		// Stored in milliseconds
		maxAge: 24 * 60 * 60 * 1000, // expires after 1 day
	},
	resave: false,
	saveUninitialized: true,
	store: new SequelizeStore({
		db: sequelize,
	}),
};

// Use sessions
app.use(session(sess));

// Express Handlebars
const hbs = exphbs.create({ helpers });

// Set up Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// Start the server
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () =>
		console.log(
			`\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
		)
	);
});
