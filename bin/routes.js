// dependency library
const express = require('express')
const router = express.Router()

// feature modules lib/middlewares/isAuthenticated
const { httpJwtAuthentication } = require('../lib/middlewares/httpJwtAuthentication')

router.use(`/health`, require('../app/modules/health/route'));
router.use(`/search`, require('../app/modules/search/route'));
router.use(`/bucket`, require('../app/modules/bucket/route'));


module.exports = router;