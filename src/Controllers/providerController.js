const { getById } = require('../Services/companyService');
const providerService = require('../Services/providerService');
const personType = require('../Enums/personType');
const states = require('../Enums/states');

function getAge(birthday) {
  const today = new Date();
  const birthdayDate = new Date(birthday);
  let age = today.getFullYear() - birthdayDate.getFullYear();
  const m = today.getMonth() - birthdayDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthdayDate.getDate())) {
    age -= 1;
  }
  return age;
}

async function validate(provider) {
  if (personType[provider.personType] === personType.individual) {
    if (!provider.rg || !provider.birthday) {
      return Promise.reject(new Error(
        'Você deve preencher o RG e a Data de Nascimento quando'
        + ' o fornecedor for pessoa física',
      ));
    }

    return getById(provider.company)
      .then((data) => {
        if (states[data.state] === states.PR && getAge(provider.birthday) < 18) {
          return Promise.reject(new Error(
            'Não é permitido cadastrar um fornecedor pessoa física menor de idade',
          ));
        }
        return Promise.resolve(true);
      });
  }
  return Promise.resolve(false);
}

module.exports = {
  getProviders(req, res) {
    providerService.getAll()
      .then((data) => res.send(data))
      .catch((err) => res.status(404).send(err));
  },

  getProvider(req, res) {
    const { id } = req.params;

    providerService.getById(id)
      .then((data) => res.send(data))
      .catch((err) => res.status(404).send(err));
  },

  createProvider(req, res) {
    const { body } = req;
    body.registerDate = Date.now();

    validate(req.body)
      .then(() => {
        providerService.create(body)
          .then((data) => res.send(data))
          .catch((err) => res.status(400).send(err));
      })
      .catch((warns) => res.status(401).send(warns.message));
  },

  updateProvider(req, res) {
    validate(req.body)
      .then(() => {
        providerService.update(req.body)
          .then((data) => res.send(data))
          .catch((err) => res.status(400).send(err));
      })
      .catch((warns) => res.status(401).send(warns.message));
  },
};
