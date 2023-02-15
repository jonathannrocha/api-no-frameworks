const { randomUUID } = require('crypto');

class Hero {
  // prettier-ignore
  constructor({
    id, name, age, power,
  }) {
    this.id = id ?? randomUUID();
    this.name = name;
    this.age = +age;
    this.power = power;
  }

  isValid() {
    const propertyNames = Object.getOwnPropertyNames(this);
    const amountInvalidPropertis = propertyNames
      .map((property) => {
        if (this[property]) {
          return null;
        }
        return `${property} is missing!`;
      })
      .filter((property) => property !== null);
    return {
      valid: amountInvalidPropertis.length === 0,
      error: amountInvalidPropertis,
    };
  }
}

module.exports = Hero;
