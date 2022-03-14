// dependency library
const { Client } = require('@elastic/elasticsearch')

// feature modules
// const DAL = require("./DAL");
// const { ERROR_CODES } = require("./error");
const AppError = require("../../../lib/errorClasses/appError");
const config = require('./../../../lib/config');
const utils = require('./utils');


let getNotifications = async (body) => {

  console.log('s3 body ', body)
  if (body.Message.Records.length)
    return 1;

  const documentName = body.Message.Records[0].s3.object.key;
  const docAwsUrl = `https://doc-1-bucket.s3.ap-south-1.amazonaws.com/${documentName}`;

  console.log('documentName  : ', documentName, docAwsUrl)
  const { text } = await utils.getDocumentText(docAwsUrl);

  const client = new Client({ node: config.elasticUrl })

  await client.index({
    index: 'docs',
    document: {
      name: documentName,
      docText: text
    }
  })

  // console.log('text 2 : ', text)

  return 1;
};


module.exports = {
  getNotifications
};
