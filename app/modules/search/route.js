// dependency library
const router = require('express').Router();

// feature modules
const controller = require('./controller');
const asyncExecute = require('../../../lib/middlewares/asyncExecute');


router.get('/docs', asyncExecute(controller.getDocuments));
/**
 * @apiGroup SEARCH 
 * @apiVersion  1.0.0
 * @apiDescription API to get search result.
 * @api {get} /search/docs get search result
 *
 *@apiParam {String} searchText Send searchText as a query parameter
 *
 *
 *@apiSuccessExample {json} Success-Response: status - 200
    {
        "statusCode": 200,
        "result": [
            {
                "name": "sample1.docx",
                "docUrl": "https://doc-1-bucket.s3.ap-south-1.amazonaws.com/sample1.docx"
            }
        ]
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