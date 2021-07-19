const mongoose = require('mongoose');

const CompanyModel = mongoose.model('company', new mongoose.Schema({
  state: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  cnpj: {
    type: String,
    required: true,
  },
}));

module.exports = CompanyModel;
