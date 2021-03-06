const
  express = require('express'),
  app = express(),
  ejsLayout = require('express-ejs-layouts'),
  mongoose = require('mongoose'),
  flash = require('connect-flash'),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  session = require('express-session'),
  mongoDbStore = require('connect-mongodb-session')(session),
  passport = require('passport'),
  passportConfig = require('./config/passport.js'),
  userRoutes = require('./routes/user.js'),
  httpClient = require('request'),
  //require our API routes
  sportsRoutes = require('./routes/sports.js'),
  whRoutes = require('./routes/whClient.js')
    //dotenv allows us to access our environment variables
    dotenv = require('dotenv').load();
//

// enviroment port
const
  PORT = process.env.PORT || 3000,
  mongoConnectionString = process.env.MONGODB_URI || 'mongodb://localhost/my-dashboard'
  
// mongoose database
mongoose.connect(mongoConnectionString, (err) => {
    if(err) return console.log(err)
    console.log('Connected to MongoDB ✔️')
})


const store  = new mongoDbStore({
    uri: mongoConnectionString,
    collection: 'sessions'
})

app.use(express.static(__dirname + '/public'))
app.use(logger('dev'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(flash())

// config cookies 
app.use(session({
    secret: 'elfuegoisreal',
    cookie: {maxAge: 600000000},
    resave: true,
    saveUninitialize: false,
    store: store
}))

app.use(passport.initialize())
app.use(passport.session())

app.set('view engine', 'ejs')
app.use(ejsLayout)

app.use((req, res, next) => {
    app.locals.currentUser = req.user
    app.locals.loggedIn = !!req.user
    next()
})

app.get('/', (req, res) => {
    res.render('home', {
        user: req.user
    })
})

//other routes
app.use('/', userRoutes)
app.use('/sports', sportsRoutes)
app.use('/webhose', whRoutes)


app.listen(PORT, (err) => {
    console.log(err || `Listening to port 🤖  ${PORT} 🤖`)
})
