const publicRouter = require('express').Router();

const publicController = require('./controllers/public');

publicRouter.route('/getGladiators/:year').get(publicController.getGladiatorsByYear);

module.exports = publicRouter;