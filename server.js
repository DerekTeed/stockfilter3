// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const session = require("express-session");
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const apiRoutes = require("./routes/api-routes");
const path = require("path");
// const pug = require('pug');

// const http = require('http');

const app = express();

const PORT = process.env.PORT || 3001;

// config express-session
var sess = {
  secret: "stockfilterproject",
  cookie: {},
  resave: false,
  saveUninitialized: true
};

if (app.get("env") === "production") {
  sess.cookie.secure = true; // serve secure cookies, requires https
};

app.use(session(sess));

// Load environment variables from .env
const dotenv = require('dotenv');
dotenv.config();

// Load Passport
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

// Configure Passport to use Auth0
const strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL:
      process.env.AUTH0_CALLBACK_URL || 'http://localhost:3001/callback'
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
    // accessToken is the token to call Auth0 API (not needed in the most cases)
    // extraParams.id_token has the JSON Web Token
    // profile has all the information from the user
    return done(null, profile);
  }
);

passport.use(strategy);

app.use(passport.initialize());
app.use(passport.session());

// You can use this section to keep a smaller payload
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

// Set up Auth0 configuration
const authConfig = {
  domain: "dev-gs2kz-d1.auth0.com",
  audience: "https://stockfilterapi/"
};

// Define middleware that validates incoming bearer tokens
// using JWKS from dev-gs2kz-d1.auth0.com
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ["RS256"]
});

// Define an endpoint that must be called with an access token
app.get("/api/external", checkJwt, (req, res) => {
  res.json({
    msg: "Your Access Token was successfully validated!"
  });
});

// app.set('view engine', 'pug');

// const userInViews = require('./lib/middleware/userInViews');
const authRouter = require('./routes/auth');
// const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

app.get('/', function(req, res) {
  res.send(path.resolve(__dirname, 'client/build', 'index.html'))
}
)
// app.use(userInViews());
app.use('/', authRouter);
// app.use('/', indexRouter);
app.use('/', usersRouter);
app.use(apiRoutes);

// Requiring our models for syncing
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("./client/public/index.html"));

// enhance your app security with Helmet
app.use(helmet());

// use bodyParser to parse application/json content-type
app.use(bodyParser.json());

// enable all CORS requests
app.use(cors());

// log HTTP requests
app.use(morgan('combined'));

// Routes
// =============================================================
// require("./routes/api-routes.js")(app);
require("./config/config.json");

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function () {
  // http.createServer(app).listen(PORT, function () {
  //   console.log("App listening on PORT " + PORT);
  // });
  app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
});
