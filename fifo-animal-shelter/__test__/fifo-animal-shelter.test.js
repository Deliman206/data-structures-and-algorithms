'use strict';

import Animal from '../lib/animal';
import AnimalShelter from '../lib/fifo-animal-shelter';

describe('Should validate the Animal constructor ', () => {
  test('Animal constructor', () => {
    const animal = new Animal('dog');

    expect(animal.type).toEqual('dog');
  });
});
describe('Should validate class Animal Shelter', () => {
  test('Enqueue Method', () => {
    const animalShelter = new AnimalShelter();
    animalShelter.enqueue('cat');
    animalShelter.enqueue('dog');
    animalShelter.enqueue('rabbit');
    expect(animalShelter.storage.map(animal => animal.type)).toEqual(['cat', 'dog', 'rabbit']);
  });
  test('Dequeue Method', () => {
    const animalShelter = new AnimalShelter();
    animalShelter.enqueue('rabbit');
    animalShelter.enqueue('cat');
    animalShelter.enqueue('dog');
    expect(animalShelter.dequeue('cat')[0].type).toEqual('cat');
    expect(animalShelter.dequeue('dog')[0].type).toEqual('dog');      
    expect(animalShelter.dequeue('rabbit')[0].type).toEqual('rabbit');      
  });
});
