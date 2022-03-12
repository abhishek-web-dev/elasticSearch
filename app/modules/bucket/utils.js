const textract = require('textract');


const getDocumentText = (docAwsUrl) => {
  return new Promise((resolve, reject) => {
    textract.fromUrl(docAwsUrl, (error, text) => {
      if (error) {
        reject(error);
      }
      //console.log('text ', text);
      resolve({ text })
    })
  })
}

module.exports = {
  getDocumentText
}