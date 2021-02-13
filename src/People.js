/**
 * Class person
 * @class
 */
class People {
  /**
   * @constructor
   * @param {string} name people name
   */
  constructor(name) {
    /**
     * people name (text for details)
     * @property {string} name people name (property description)
     */
    this.name = name;
  }

  /**
   * @returns {string} hello message and the name
   * @method
   */
  hello() {
    return `hello, ${this.name}`
  }
}

module.exports = People