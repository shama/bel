var assert = require('assert')
var Partial = require('./partial')

module.exports = Ref

/**
 * Rendered element info/utilities
 * @param {*} key Unique idientifier
 * @param {Function} bind Bind Element to another Element
 * @param {Function} update Update Element
 */
function Ref (partial, bind, update) {
  assert(partial instanceof Partial, 'nanohtml: partial should be type Partial')
  assert(typeof bind === 'function', 'nanohtml: bind should be type function')
  this.context = partial.context
  this.key = partial.key
  this.bind = bind
  if (typeof update === 'function') this.update = update
}
