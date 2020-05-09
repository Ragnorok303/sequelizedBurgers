# sequelizedBurgers

The challenge for this application was to use Express, Handlebars, and mySql to create an interactive database. Jaws_DB handles the server database. The application achieves this by allowing the user to create and eat burgers! 

The application is currently hosted on heroku [HERE](https://powerful-thicket-85633.herokuapp.com/).

## Functionality

The user is displayed two tables, one with burgers that they have not eaten yet, and another with burgers that they have enjoyed. There are two options to interact, create a new burger, and eat a burger. When a new burger is created, the burger is inserted into the server database. When a burger is eaten, the matching burger is found using it's ID, and is updated with a status of eaten. 