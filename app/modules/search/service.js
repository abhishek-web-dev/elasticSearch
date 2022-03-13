// dependency library
const { Client } = require('@elastic/elasticsearch')

// feature modules
const DAL = require("./DAL");
const { ERROR_CODES } = require("./error");
const AppError = require("../../../lib/errorClasses/appError");
const config = require('./../../../lib/config');



let getDocuments = async ({ searchText }) => {
  console.log('searchText ', searchText)

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
  console.log('result', result)
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


// `https://www.instagram.com/graphql/query/?query_hash=90709b530ea0969f002c86a89b4f2b8d&variables={"reel_ids":["${userId}"],"tag_names":[],"location_ids":[],"highlight_reel_ids":[],"precomposed_overlay":true,"show_story_viewer_list":true,"story_viewer_fetch_count":50,${endCursors.length === 0 ? '"story_viewer_cursor"' + ':""' : '"story_viewer_cursor":' + endCursors},"stories_video_dash_manifest":false}`