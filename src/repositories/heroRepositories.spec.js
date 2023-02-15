/* eslint-disable no-undef */
const path = require('path');
const seed = require('./seed');
const HeroEntities = require('../entities/hero');

const HeroRepository = require('./heroRepositories');

const dbPath = path.join(__dirname, '../../database/data.json');

describe('testing hero repositories', () => {
  beforeAll(async () => seed.populationDb());
  afterAll(async () => seed.crearDb());

  it('should list heroes', async () => {
    const heroes = new HeroRepository({ file: dbPath });
    const list = await heroes.find();
    expect(list.length).toBeGreaterThanOrEqual(2);
  });

  it('shoudl return one hero', async () => {
    const mockHero = await seed.dataValue[0];
    const heroRepository = new HeroRepository({ file: dbPath });
    const hero = await heroRepository.find(mockHero.id);
    expect(hero).toEqual(mockHero);
  });

  it('should create a new hero', async () => {
    const mockHero = {
      name: 'Mulher Maravilha',
      power: 'Super strength',
      age: 5000,
    };
    const newHero = new HeroEntities(mockHero);
    const heroRepository = new HeroRepository({ file: dbPath });
    const newCreate = await heroRepository.create(newHero);
    const hero = await heroRepository.find(newCreate);
    expect(hero).toEqual(newHero);
  });

  it('should delete a hero', async () => {
    const mockHero = await seed.dataValue[0];
    const heroRepository = new HeroRepository({ file: dbPath });
    await heroRepository.delete(mockHero.id);
    const hero = await heroRepository.find();

    const valid = hero.filter((heroItem) => heroItem.id === mockHero.id);
    expect(valid.length).toBe(0);
  });
});
