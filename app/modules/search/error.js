
// feature modules
const { httpCode } = require('../../constants/http');

const ERROR_CODES = {
  COOKIES_NOT_AVAILABLE: 1200,
  ERROR_FROM_PROXY_SERVER: 1201,
  ERROR_FROM_INSTA_STORY_SERVER: 1202
};

const ERROR_INFO = {
  [ERROR_CODES.COOKIES_NOT_AVAILABLE]: {
    errorDescription: 'Cookies are not available!',
    type: 'story',
    errorUserTitle: '',
    errorUserMsg: 'Oops! please try again.',
    httpCode: httpCode.CONFLICT
  },
  [ERROR_CODES.ERROR_FROM_PROXY_SERVER]: {
    errorDescription: 'Error from proxy server!',
    type: 'story',
    errorUserTitle: '',
    errorUserMsg: 'Oops! please try again.',
    httpCode: httpCode.FAILED_DEPENDENCY
  },
  [ERROR_CODES.ERROR_FROM_INSTA_STORY_SERVER]: {
    errorDescription: 'Error from instagram server!',
    type: 'story',
    errorUserTitle: '',
    errorUserMsg: 'Oops! please try again.',
    httpCode: httpCode.FAILED_DEPENDENCY
  }
};

module.exports = {
  ERROR_CODES,
  ERROR_INFO
};
