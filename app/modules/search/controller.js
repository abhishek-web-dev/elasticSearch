// feature modules
const { successResponse } = require('../../../lib/response/https/successResponse');
const { validateRequest } = require('../../../lib/request/validateRequest');
const { httpCode } = require('../../constants/http');
const service = require('./service');
const validator = require('./validator');

const getDocuments = async (request, response) => {
  //validateRequest(request, validator.getStory);

  let data = await service.getDocuments(request.query);

  // successResponse(request, response, httpCode.OK_REQUEST, responseObj);
  successResponse(response, httpCode.OK_REQUEST, data);
};


module.exports = {
  getDocuments
};
