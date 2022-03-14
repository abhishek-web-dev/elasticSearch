// dependency library
const Joi = require('joi');

// write all validator logic

const getDocuments = {
  query: Joi.object().keys({
    searchText: Joi.string().required()
  })
};


module.exports = {
  getDocuments
}

