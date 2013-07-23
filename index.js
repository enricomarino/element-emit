/**
 * element-emit
 * emit, plugin for element
 * 
 * @copyright 2013 Enrico Marino
 * @license MIT
 */

module.exports = function (element) {

  /**
   * emit
   * Emit event.
   *
   * @param {String} event event name
   * @api public
   */
  
  element.prototype.emit = function (event) {
    //TODO
    return this;
  };
  
  
  return element;
};
