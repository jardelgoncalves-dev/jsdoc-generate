/**
 * Class Fruit
 * @class
 */
class Fruit {
  /**
   * @constructor
   * @param {string} name fruit name
   * @param {number} calories fruit calories
   */
  constructor(name, calories) {
    /**
     * fruit name (text for details)
     * @property {string} name fruit name (property description)
     */
    this.name = name;

    /**
     * fruit calories (text for details)
     * @property {number} calories fruit name (property description)
     */
    this.calories = calories;
  }

  /**
   * @returns {string} fruit information
   * @method
   */
  showInfo() {
    return `The ${this.name} has ${this.calories}kcal in a portion of 100 grams.`
  }
}

module.exports = Fruit