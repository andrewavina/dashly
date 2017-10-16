const
  express = require('express'),
  userRouter = new express.Router(),
  passport = require('passport')
  httpClient = require('request')
//

userRouter.route('/signup')
  .get((req, res) => {
    res.render('signup', {message: req.flash('signup-message')})
  })
  .post(passport.authenticate('local-signup', {
    successRedirect: '/dashboard',
    failureRedirect: '/signup',
    failureFlash: true
  }))
//

userRouter.route('/login')
  .get((req, res) => {
    res.render('login', {message: req.flash('login-message')})
  })
  .post(passport.authenticate('local-login', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true
  }))
//

userRouter.route('/dashboard')
  .get((req, res) => {
    res.render('user/dashboard', {
      user: req.user
    })
  })
//

userRouter.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})


//Sports API test
userRouter.get('/test', (req, res) => {
  var apiUrl = 'https://api.sportradar.us/nfl-ot2/games/b7aeb58f-7987-4202-bc41-3ad9a5b83fa4/boxscore.xml?api_key=ptr58dz7pn2z8mdxbqrcsqdj'
  httpClient.get(apiUrl, (err, response, body) => {
    var data = JSON.parse(body)
    console.log(data)   // test
  })
})


module.exports = userRouter

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } 
  res.redirect('/')
}
