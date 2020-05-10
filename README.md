# sequelizedBurger

This app is a burger logger with MySQL, Node, Express, Handlebars and Sequelize, and follows the MVC design pattern.
Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
Whenever a user submits a burger's name, the app will display the burger -- waiting to be devoured once the burger is devoured it has a delete button that can remove the burger and digest it.
Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page with customer.
The app will store every burger in a database, whether devoured or not, and deleted out the database when it digested.
Check out the deployed app on Heroku [here](https://powerful-thicket-85633.herokuapp.com/)!

# Instructions
After cloning down the repo to your computer, run `npm install` to download the Node dependencies.
Then, be sure to serve the app in `localhost:8080` in your browser