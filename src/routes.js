/* eslint-disable no-restricted-syntax */
const heroFactor = require('./factories/heroFactory');
const HandleError = require('./app-error');

const heroService = heroFactor.generateInstance();
const Hero = require('./entities/hero');

const DEFAULT_HEADER = { 'Content-Type': 'application/json' };

const routes = {
  '/heroes:get': async (request, response) => {
    const { id } = request.queryString;
    const hero = await heroService.find(id);
    if (!hero[0]) throw new HandleError('Hero not found', 404);

    response.write(JSON.stringify({ results: hero }));

    response.end();
  },
  '/heroes:post': async (request, response) => {
    for await (const data of request) {
      const item = JSON.parse(data);
      const hero = new Hero(item);
      const { valid, error } = hero.isValid();

      if (!valid) {
        throw new HandleError(error.join(','), 406);
      }

      const id = await heroService.create(hero);
      response.writeHead(201, DEFAULT_HEADER);
      response.write(
        JSON.stringify({ sucess: 'Hero created whit sucess!!', id }),
      );
      response.end();
    }
  },
  '/update:patch': async (request, response) => {
    for await (const data of request) {
      const item = JSON.parse(data);
      const { id } = request.queryString;
      if (!data) throw new HandleError('No data', 404);
      const updateHero = await heroService.update(id, item);
      response.writeHead(200, DEFAULT_HEADER);
      response.write(JSON.stringify(updateHero));
    }

    response.end();
  },
  '/delete:delete': async (request, response) => {
    // setTimeout(async () => {}, 1000);
    const { id } = request.queryString;

    const hero = await heroService.find(id);

    if (!hero) throw new HandleError('Hero not found', 404);

    const heroDelete = await heroService.delete(id);

    response.writeHead(200, DEFAULT_HEADER);
    response.write(
      JSON.stringify({ sucess: `hero ${heroDelete} sucess delete` }),
    );

    return response.end();
  },
  default: (request, response) => {
    response.writeHead(404, DEFAULT_HEADER);
    response.write(JSON.stringify({ error: 'Not found' }));
    response.end();
  },
};
module.exports = routes;
