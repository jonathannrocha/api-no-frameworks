const path = require('node:path');

const HeroRepository = require('../repositories/heroRepositories');
const HeroService = require('../services/heroService');

const filePath = path.join(__dirname, '../../database/data.json');

const generateInstance = () => {
  const heroRepository = new HeroRepository({ file: filePath });
  const heroService = new HeroService({ heroRepository });

  return heroService;
};

module.exports = { generateInstance };
