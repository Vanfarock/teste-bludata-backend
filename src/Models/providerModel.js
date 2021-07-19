const mongoose = require('mongoose');
const personType = require('../Enums/personType');

function isIndividual() {
  return personType[this.personType] === personType.individual;
}

const ProviderModel = mongoose.model('provider', new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  personType: {
    type: String,
    enum: Object.keys(personType),
    required: true,
  },
  identification: {
    type: String,
    required: true,
  },
  registerDate: {
    type: Date,
    required: true,
  },
  rg: {
    type: String,
    required: isIndividual,
  },
  birthday: {
    type: Date,
    required: isIndividual,
  },
  phones: {
    type: [String],
    required: false,
  },
}));

module.exports = ProviderModel;
