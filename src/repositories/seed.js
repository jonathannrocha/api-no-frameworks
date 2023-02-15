const { writeFile } = require('fs/promises');
const path = require('path');

const data = [
  {
    id: '7707da5f-5c9e-405f-a3c9-28fab08fbb3e',
    name: 'Izuzo Midorya',
    age: 15,
    power: 'all for one',
  },
  {
    id: '7707da5f-5c9e-405f-a3c9-28fab08fbb3e',
    name: 'Naruto Uzumaki',
    age: 17,
    power: 'Kurama',
  },
];

class SeedDb {
  constructor(dataValue, pathFile) {
    this.dataValue = dataValue;
    this.pathFile = pathFile;
  }

  async populationDb() {
    const json = JSON.stringify(this.dataValue);
    await writeFile(this.pathFile, json);
  }

  async crearDb() {
    const json = JSON.stringify([]);
    await writeFile(this.pathFile, json);
  }
}

module.exports = new SeedDb(
  data,
  path.join(__dirname, '../../database/data.json'),
);
