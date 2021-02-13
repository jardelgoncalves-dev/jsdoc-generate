const Fruit = require('./Fruit');


/**
 * Orange Fruit class
 * @class
 * @extends Fruit
 */
class Orange extends Fruit {
  constructor() {
    super('Orange', 65);
  }
}

module.exports = Orange