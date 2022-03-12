// dependency library
const express = require('express')
const router = express.Router()

// feature modules lib/middlewares/isAuthenticated
const { httpJwtAuthentication } = require('../lib/middlewares/httpJwtAuthentication')

// router.use(`/`, require('./healthCheck'));
//server health check API
router.get(`/health`, (req, res) => res.send('Ok'));
/**
 * @apiGroup Health Check
 * @apiVersion  1.0.0
 * @apiDescription API for checking server health.
 * @api {get} /health API to check server health
 *
 * 
 *@apiSuccessExample {json} Success-Response: Status - 200
  {
      "Ok"
  }
*/

router.use(`/search`, require('../app/modules/search/route'));


module.exports = router;