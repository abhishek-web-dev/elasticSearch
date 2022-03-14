// dependency library
const router = require('express').Router();

// feature modules
const controller = require('./controller');
const asyncExecute = require('../../../lib/middlewares/asyncExecute');


router.post('/notification', asyncExecute(controller.getNotifications));
/**
 * @apiGroup BUCKET 
 * @apiVersion  1.0.0
 * @apiDescription API to get s3 bucket notification
 * @api {post} /bucket/notification get bucket notification
 *
 *
 *
 *@apiSuccessExample {json} Success-Response: status - 200
    {
        "statusCode": 200,
        "result": {}
    }
  @apiErrorExample {json} Error-Response: status - 500
    {
        "statusCode": 400,
        "error": {
            "errorDescription": "Invalid body in request",
            "type": "",
            "errorUserTitle": "",
            "errorUserMsg": "Bad Request"
        }
    }
*/


module.exports = router;