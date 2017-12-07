# Shoes_Api


## About

* This is an API for a shoe shop it has a stock of shoes which are listed in
  - Brand
  - Color
  - Price
  - Size
  - In Stock/ how much pairs available for a certain shoe

 * The API has a front-end running using `index.html`

 ## We will be able to

 * View available stock
 * Add shoes to stock
 * Update stock if a shoe is bought

 ## Development Environment

 * Server: [NodeJS](https://nodejs.org)
 * Database: [MongoDB](https://www.mongodb.com)
 * Version Control: [Github](https://github.com)
 * Live Deployment: [Heroku](https://heroku.com)
 * Testing: [Postman](https://www.getpostman.com/)

  **NB** Postman is used to make API calls and see how the API works.

 ## Lets start

 * Fork this project [here](https://github.com/Vaztonyo/shoes_api)
 * Clone via the terminal `git clone https://github.com/Username/shoes_api`

 **NB** Username will be replaced with your github username.

 ## Depencies

 * This app runs on [npm](https://www.npmjs.com/) modules and you will need these:
  - body-parser
  - express
  - express-handlebars
  - mongoose

  ## Installations

  * Package.json
  - `np init -y`

   * Node Modules
   - `npm install`


   * npm Modules
   - `npm install --save body-parser`
   - `npm install --save express`
   - `npm install --save express-handlebars`
   - `npm install --save mongoose`

   * Nodemon
   -  Nodemon is an npm module used to automatically restart the server after any changes
   - `sudo npm install nodemon`

   ## Run the App

   * If you have:

   1. Forked the project
   2. Cloned it locally
   3. Have NodeJS installed
   4. MongoDB is setup
   5. An account with Heroku
   6. Node Modules folder exists
   7. Package.json file exists
   8. `nodemon` is installed and running

   If all the above are completed then run `nodemon` on your terminal, you should see:

 ```
  [nodemon] 1.12.1
  [nodemon] to restart at any time, enter `rs`
  [nodemon] watching: *.*
  [nodemon] starting `node index.js`
  App running on port: 8080
  DB connection successful
  ```
  You can now open your browser and go to:
  - homepage: `localhost:8083/`
  - see available stock: `localhost:8080/api/shoes`
  - see certain brands: `localhost:8080/api/shoes/brand/<yourbrand>`
  - see certain brand and sizes: `localhost:8080/api/shoes/brand/<yourbrand>/size/<yoursize>`
  - sell a shoe `localhost:8080/api/shoes/sold/<yourbrand>`

  **NB** To sell a shoe on Postman You would have to use the POST Method.
