module.exports = {
  apps: [{
    name: 'express-api',
    script: 'node',
    args: './bin/www',
    env: {
      "PORT": 3000
    }
  }]
};