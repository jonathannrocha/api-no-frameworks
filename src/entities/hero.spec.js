/* eslint-disable no-undef */
const Hero = require('./hero');

const MOCK_HEROES = { name: 'Batman', power: 'millionaire', age: 30 };
describe('test hero entities', () => {
  it('should create new hero', async () => {
    const { name, power, age } = new Hero(MOCK_HEROES);
    expect({ name, power, age }).toEqual(MOCK_HEROES);
  });

  it('should not create a hero', async () => {
    const hero = new Hero({ name: '' });
    expect(hero.isValid().valid).toBeFalsy();
  });
});
