/*
 * Brainrex API
 * Provides anomaly detection and natural language processing technlogies to blockchain developers.
 *
 * OpenAPI spec version: 1.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.10
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Brainrex) {
      root.Brainrex = {};
    }
    root.Brainrex.Exchange = factory(root.Brainrex.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Exchange model module.
   * @module model/Exchange
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Exchange</code>.
   * @alias module:model/Exchange
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Exchange</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Exchange} obj Optional instance to populate.
   * @return {module:model/Exchange} The populated <code>Exchange</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('exchange'))
        obj.exchange = ApiClient.convertToType(data['exchange'], 'String');
    }
    return obj;
  }

  /**
   * Name of the digital asset exchange to get data from
   * @member {String} exchange
   */
  exports.prototype.exchange = undefined;

  return exports;

}));