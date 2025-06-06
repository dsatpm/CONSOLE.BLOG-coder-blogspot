// Import dependencies
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const reactViews = require('express-react-views');
const session = require('express-session');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Use Express and PORT
const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions with cookies
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Use sessions
app.use(session(sess));

// Express Handlebars setup
const hbs = exphbs.create({
  helpers,
});

// Set up view engines for Handlebars and React
app.engine('handlebars', hbs.engine);
app.engine('jsx', reactViews.createEngine());
app.set('view engine', 'handlebars');
app.set('views', [
  path.join(__dirname, 'views'),
  path.join(__dirname, 'views-jsx'),
]);

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  res.locals.loggedIn = req.session.loggedIn;
  next();
});

// Use routes
app.use(routes);

// Start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});
