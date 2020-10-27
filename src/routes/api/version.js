const router = require('express').Router();
const auth = require('../auth');
const versionController = require('../../controllers/Version');

const controller = versionController();

router.get('/', auth.optional, controller.get);

module.exports = router;
