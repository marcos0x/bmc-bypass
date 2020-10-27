const router = require('express').Router();
const auth = require('../auth');
const linksController = require('../../controllers/Links');

const controller = linksController();

router.post('/', auth.optional, controller.post);

module.exports = router;
