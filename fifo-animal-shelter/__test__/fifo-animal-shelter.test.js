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
  const animalShelter = new AnimalShelter();
  test('Enqueue Method', () => {
    animalShelter.enqueue('cat');
    animalShelter.enqueue('dog');
    animalShelter.enqueue('rabbit');
    expect(animalShelter.viewQueue()).toEqual(['cat', 'dog', 'rabbit']);
  });
  test('Dequeue Method', () => {
    
  });
  test('searchQueue Method', () => {
    
  });
});
