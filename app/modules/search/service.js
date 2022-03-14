// dependency library
const { Client } = require('@elastic/elasticsearch')

// feature modules
const AppError = require("../../../lib/errorClasses/appError");
const config = require('./../../../lib/config');



let getDocuments = async ({ searchText }) => {
  // console.log('searchText ', searchText)

  const client = new Client({ node: config.elasticUrl })

  let result = await client.search({
    index: 'docs',
    query: {
      "bool": {
        "must": [],
        "filter": [],
        "should": [
          {
            "match_phrase_prefix": {
              "name": {
                "query": searchText
              }
            }
          },
          {
            "match_phrase_prefix": {
              "docText": {
                "query": searchText
              }
            }
          }
        ],
        "must_not": []
      }
    }
  })
  // console.log('result', result)
  return result.hits.hits.map((d) => {
    return {
      name: d._source.name,
      docUrl: `https://doc-1-bucket.s3.ap-south-1.amazonaws.com/${d._source.name}`
    };
  });

};


module.exports = {
  getDocuments
};
