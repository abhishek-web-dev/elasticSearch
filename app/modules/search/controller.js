// feature modules
const { successResponse } = require('../../../lib/response/https/successResponse');
const { validateRequest } = require('../../../lib/request/validateRequest');
const { httpCode } = require('../../constants/http');
const service = require('./service');
const validator = require('./validator');

const getDocuments = async (request, response) => {
  validateRequest(request, validator.getDocuments);

  const result = await service.getDocuments(request.query);

  successResponse(response, httpCode.OK_REQUEST, result);
};


module.exports = {
  getDocuments
};
