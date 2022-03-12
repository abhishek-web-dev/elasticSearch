// dependency library
const axios = require('axios');
const AWS = require('aws-sdk');
// const reader = require('any-text');
const textract = require('textract');

// feature modules
const DAL = require("./DAL");
const { ERROR_CODES } = require("./error");
const AppError = require("../../../lib/errorClasses/appError");
const config = require('./../../../lib/config');



let getStory = async ({ }) => {
  const s3 = new AWS.S3({
    accessKeyId: config.awsS3id,
    secretAccessKey: config.awsS3Secret
  });
  let textDate;
  // Call the function to get list of items from S3.
  let result = await s3.listObjectsV2({ Bucket: 'ak-documents' }).promise();

  console.log('result ', result);

  const params = { Bucket: 'ak-documents', Key: result.Contents[0].Key }
  const response = await s3.getObject(params).promise() // await the promise
  // console.log('response ', response)
  // const text = await reader.getText(`path-to-file`);
  let url = `https://ak-documents.s3.ap-south-1.amazonaws.com/${result.Contents[0].Key}`;
  console.log('url ', url)
  textract.fromUrl(url, function (error, text) {
    textDate = text;
    console.log('text ', text)
  })
  const fileContent = response.Body.toString('utf8'); // can also do 'base64' here if desired
  // console.log('fileContent ', fileContent);

  return {
    result,
    response,
    textDate
  }
};


module.exports = {
  getStory
};


// `https://www.instagram.com/graphql/query/?query_hash=90709b530ea0969f002c86a89b4f2b8d&variables={"reel_ids":["${userId}"],"tag_names":[],"location_ids":[],"highlight_reel_ids":[],"precomposed_overlay":true,"show_story_viewer_list":true,"story_viewer_fetch_count":50,${endCursors.length === 0 ? '"story_viewer_cursor"' + ':""' : '"story_viewer_cursor":' + endCursors},"stories_video_dash_manifest":false}`