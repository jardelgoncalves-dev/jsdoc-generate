/**
 * When classes with the same name exist, the documentation tends to combine all
 * the methods of both classes. To resolve this, add an alias for each class.
 * @alias SameName1
 * @class
 */
class SameName {

  /**
   * This function returns any phrase
   * @param {*} foo anything
   * @param {string} ba anything
   * @returns {string} Say anything
   * @method
   */
  say(foo, ba) {
    return `${foo}, ${ba}`
  }
}

module.exports = SameName