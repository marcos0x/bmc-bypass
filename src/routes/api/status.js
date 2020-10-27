const router = require('express').Router();
const auth = require('../auth');
const statusController = require('../../controllers/Status');

const controller = statusController();

router.get('/', auth.optional, controller.get);

module.exports = router;
