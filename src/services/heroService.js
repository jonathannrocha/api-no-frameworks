/*
  Because it is a test project and the
  purpose was the creation of the API without
  framework, not so many business rules
  that can be tested.
*/

class HeroService {
  constructor({ heroRepository }) {
    this.heroRepository = heroRepository;
  }

  async find(itemId) {
    return this.heroRepository.find(itemId);
  }

  async create(data) {
    const { name, power, age } = data;
    if (!name || !power || !age) throw new Error('Data is not valid!', 404);
    return this.heroRepository.create(data);
  }

  async delete(itemId) {
    if (!itemId) throw new Error('Id is not valid!', 404);
    return this.heroRepository.delete(itemId);
  }

  async update(itemId, data) {
    return this.heroRepository.update(itemId, data);
  }
}

module.exports = HeroService;
