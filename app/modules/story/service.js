// dependency library
const axios = require('axios');

// feature modules
const DAL = require("./DAL");
const { ERROR_CODES } = require("./error");
const AppError = require("../../../lib/errorClasses/appError");
const service = require('./../services/proxyIp')




let getStory = async ({ }) => {


};


module.exports = {
  getStory
};


// `https://www.instagram.com/graphql/query/?query_hash=90709b530ea0969f002c86a89b4f2b8d&variables={"reel_ids":["${userId}"],"tag_names":[],"location_ids":[],"highlight_reel_ids":[],"precomposed_overlay":true,"show_story_viewer_list":true,"story_viewer_fetch_count":50,${endCursors.length === 0 ? '"story_viewer_cursor"' + ':""' : '"story_viewer_cursor":' + endCursors},"stories_video_dash_manifest":false}`