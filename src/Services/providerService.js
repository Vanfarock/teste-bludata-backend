const ProviderModel = require('../Models/providerModel');

module.exports = {
  getAll() {
    return ProviderModel.find({});
  },

  getById(providerId) {
    return ProviderModel.findById(providerId);
  },

  create(data) {
    const instance = new ProviderModel(data);
    instance.isNew = true;
    return instance.save();
  },

  update(data) {
    const instance = new ProviderModel(data);
    instance.isNew = false;
    return instance.save();
  },
};
