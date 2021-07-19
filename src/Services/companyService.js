const CompanyModel = require('../Models/companyModel');

module.exports = {
  getAll() {
    return CompanyModel.find({});
  },

  getById(companyId) {
    return CompanyModel.findById(companyId);
  },

  create(data) {
    const instance = new CompanyModel(data);
    instance.isNew = true;
    return instance.save();
  },

  update(data) {
    const instance = new CompanyModel(data);
    instance.isNew = false;
    return instance.save();
  },
};
