'use strict';

import uuid from 'uuid';
import faker from 'faker';

const Animal = class Animal {
  constructor(type) {
    this.type = type;
    this.id = uuid();
    this.name = faker.name.firstName();
  }
};

export default Animal;
