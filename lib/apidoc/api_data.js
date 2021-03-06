define({ "api": [
  {
    "group": "BUCKET",
    "version": "1.0.0",
    "description": "<p>API to get s3 bucket notification</p>",
    "type": "post",
    "url": "/bucket/notification",
    "title": "get bucket notification",
    "success": {
      "examples": [
        {
          "title": "Success-Response: status - 200",
          "content": "{\n    \"statusCode\": 200,\n    \"result\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: status - 500",
          "content": "{\n    \"statusCode\": 400,\n    \"error\": {\n        \"errorDescription\": \"Invalid body in request\",\n        \"type\": \"\",\n        \"errorUserTitle\": \"\",\n        \"errorUserMsg\": \"Bad Request\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/modules/bucket/route.js",
    "groupTitle": "BUCKET",
    "name": "PostBucketNotification"
  },
  {
    "group": "Health_Check",
    "version": "1.0.0",
    "description": "<p>API for checking server health.</p>",
    "type": "get",
    "url": "/health",
    "title": "API to check server health",
    "success": {
      "examples": [
        {
          "title": "Success-Response: Status - 200",
          "content": "{\n    \"Ok\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/modules/health/route.js",
    "groupTitle": "Health_Check",
    "name": "GetHealth"
  },
  {
    "group": "SEARCH",
    "version": "1.0.0",
    "description": "<p>API to get search result.</p>",
    "type": "get",
    "url": "/search/docs",
    "title": "get search result",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "searchText",
            "description": "<p>Send searchText as a query parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response: status - 200",
          "content": "{\n    \"statusCode\": 200,\n    \"result\": [\n        {\n            \"name\": \"sample1.docx\",\n            \"docUrl\": \"https://doc-1-bucket.s3.ap-south-1.amazonaws.com/sample1.docx\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: status - 500",
          "content": "{\n    \"statusCode\": 400,\n    \"error\": {\n        \"errorDescription\": \"Invalid body in request\",\n        \"type\": \"\",\n        \"errorUserTitle\": \"\",\n        \"errorUserMsg\": \"Bad Request\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/modules/search/route.js",
    "groupTitle": "SEARCH",
    "name": "GetSearchDocs"
  }
] });
