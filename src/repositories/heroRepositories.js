/* eslint-disable object-curly-newline */
const { readFile, writeFile } = require('fs/promises');

class HeroRepository {
  constructor({ file }) {
    this.file = file;
  }

  async #currentFileContent() {
    return JSON.parse(await readFile(this.file));
  }

  async find(itemId) {
    const all = await this.#currentFileContent();

    if (!itemId) return all;
    const [response] = all.filter((item) => item.id === itemId);
    return response;
  }

  async create(data) {
    const currentFile = await this.#currentFileContent();
    currentFile.push(data);
    await writeFile(this.file, JSON.stringify(currentFile));

    return data.id;
  }

  async delete(itemId) {
    const currentFile = await this.#currentFileContent();

    const response = currentFile.filter((item) => item.id !== itemId);

    if (!response) return new Error('Hero not found');
    await writeFile(this.file, JSON.stringify(response));
    return itemId;
  }

  async update(itemId, data) {
    const currentFile = await this.#currentFileContent();
    let [item] = currentFile.filter((currentItem) => currentItem.id === itemId);

    item = !item ? '' : { ...item, ...data };

    const newCurrentFile = currentFile.map((currentItem) => {
      if (item.id === currentItem.id) return item;
      return currentItem;
    });
    await writeFile(this.file, JSON.stringify(newCurrentFile));
    return item;
  }
}

module.exports = HeroRepository;
