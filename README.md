# A repository for quickstart templates
* **Express server (for APIs)**:
  * Features:
    * Postgres pool integration
    * Testing with Chai + Mocha
    * Background running with PM2
  * _To run_: first `npm install` inside the express-api folder and use PM2's config file to run `pm2 start ecosystem.config.js --only express-api`. Alternatively, use `nodemon` to recompile whenever changes are made: `nodemon --exec npm start`.

* **Vue landing auth page and home page (WIP)**