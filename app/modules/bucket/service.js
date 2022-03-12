// dependency library
const axios = require('axios');
const AWS = require('aws-sdk');
// const reader = require('any-text');


// feature modules
// const DAL = require("./DAL");
// const { ERROR_CODES } = require("./error");
const AppError = require("../../../lib/errorClasses/appError");
const config = require('./../../../lib/config');
const utils = require('./utils');


let getNotifications = async (body) => {

  if (!body.Records.length)
    return 1;

  const documentName = body.Records[0].s3.object.key;
  const docAwsUrl = `https://doc-1-bucket.s3.ap-south-1.amazonaws.com/${documentName}`;

  console.log('documentName  : ', documentName, docAwsUrl)
  const { text } = await utils.getDocumentText(docAwsUrl);

  console.log('text 2 : ', text)


  return 1;
};


module.exports = {
  getNotifications
};
