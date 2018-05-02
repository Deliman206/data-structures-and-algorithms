'use strict';

import Animal from './animal';

const AnimalShelter = class AnimalShelter {
  constructor() {
    this.storage = [];
  }
  enqueue(type) {
    const animal = new Animal(type);
    this.storage.push(animal);
    return this.storage;
  }
  dequeue(preference) {
    if (preference === 'cat' || preference === 'dog') {
      for (let i = 0; i < this.storage.length; i++) {
        if (this.storage[i].type === preference) {
          return this.storage.splice(i, 1);
        }
      }
    }
    return this.storage.splice(0, 1);
  }
};
export default AnimalShelter;
