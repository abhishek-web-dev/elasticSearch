// feature modules
const { successResponse } = require('../../../lib/response/https/successResponse');
const { validateRequest } = require('../../../lib/request/validateRequest');
const { httpCode } = require('../../constants/http');
const service = require('./service');
// const validator = require('./validator');

const getNotifications = async (request, response) => {
  //validateRequest(request, validator.getStory);
  console.log('1 ', request.headers);
  // console.log('2 ', JSON.stringify(request.body))

  if (request.headers['x-amz-sns-message-type'] === 'Notification')
    await service.getNotifications(request.body);

  // successResponse(request, response, httpCode.OK_REQUEST, responseObj);
  successResponse(response, httpCode.OK_REQUEST, {
    SubscriptionArn: request.headers['x-amz-sns-topic-arn']
  });
};


module.exports = {
  getNotifications
};
