const companyService = require('../Services/companyService');

module.exports = {
  getCompanies(req, res) {
    companyService.getAll()
      .then((data) => res.send(data))
      .catch((err) => res.status(404).send(err));
  },

  getCompany(req, res) {
    const { id } = req.params;

    companyService.getById(id)
      .then((data) => res.send(data))
      .catch((err) => res.status(404).send(err));
  },

  createCompany(req, res) {
    companyService.create(req.body)
      .then((data) => res.json(data))
      .catch((err) => res.status(400).send(err));
  },

  updateCompany(req, res) {
    companyService.update(req.body)
      .then((data) => res.json(data))
      .catch((err) => res.status(400).send(err));
  },
};
