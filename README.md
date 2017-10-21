# **dashly**

## A cool app to display your own personal dashboard

<a href="https://safe-river-50568.herokuapp.com/dashboard">See application here</a>

## Tech Used
* JavaScript
* mongoDB
* Mongoose
* Node.js
* Express.js
* AJAX
* Passport.js for authentication
* Bootstrap library
* jQuery library
* HTML
* CSS
* Heroku
* API's used:
	* <a href="https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/">iTunes</a>
	* <a href="https://sportradar.us/">sportradar</a>
	* <a href="https://clearbit.com/">Clearbit</a>
	* <a href="https://webhose.io/">Webhose.io</a>


## Approach
- Started with wireframing and ERB modeling first. 
- Tried to map out and draw up how we wanted the app to function before starting to code. This planning helped make for a clean, quick start that allowed us to get the MVP technical requirements done in 3 days.
- We were able to execute well by working together on the more difficult, general portions of the app, e.g.: routes, server.js file, deploying to heroku, and authentication/authorization. 
- We challenged ourselves by selecting a different API for each team member to integrate onto a single page (SPA). We coded around each other in case one of us got caught up on an issue.  
- The user stories to begin with were:
    * As a user, I want to be able to have my own dashboard to have 1 central place to see latest info on my interests
	* As a user, I want to be able to see who my favorite NFL team is playing this week so I can plan to watch it.
    * As a user, I want to be able to listen to music from my favorite artist while on the same page as looking up my favorite NFL team and actor news.
    * As a user, I want to be able to see info on my favorite actors to stay up to date on their latest news.

## Planning Tools
* <a href="https://trello.com/b/erFnGG0G/project-3">Link to our Trello.</a>
* Data models:
	* ![Imgur](https://i.imgur.com/x3YrxZEm.png)
* Wireframes:
 	* ![Imgur](https://i.imgur.com/fL5qSiVm.jpg)
	* ![Imgur](https://i.imgur.com/2FOhlAcm.jpg)
* <a href"https://docs.google.com/presentation/d/1qgt_kIVCY7bNi5p-3QsJJDfZLEZSzetw84UjzSPD1LY/edit?usp=sharing"> Presentation Deck </a>

## Installation instructions to run your app locally on your machine
* Fork from GitHub 
* From your terminal, go into the working folder you want to save application to. 
* Run git clone
* Run `npm install`
* Ensure all required packages in server.js file are installed. 
* In terminal, open up a separate tab and run `mongod`. Then, open another tab and run `nodemon`.
* Open in browser local host to ensure site works.

## Unsolved problems or major hurdles
* Major hurdle: Redirect from edit profile page