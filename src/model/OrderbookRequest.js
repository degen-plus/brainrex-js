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
    root.Brainrex.OrderbookRequest = factory(root.Brainrex.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The OrderbookRequest model module.
   * @module model/OrderbookRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>OrderbookRequest</code>.
   * @alias module:model/OrderbookRequest
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>OrderbookRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderbookRequest} obj Optional instance to populate.
   * @return {module:model/OrderbookRequest} The populated <code>OrderbookRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('base_trading_symbol'))
        obj.baseTradingSymbol = ApiClient.convertToType(data['base_trading_symbol'], 'String');
      if (data.hasOwnProperty('exchange'))
        obj.exchange = ApiClient.convertToType(data['exchange'], 'String');
      if (data.hasOwnProperty('limit'))
        obj.limit = ApiClient.convertToType(data['limit'], 'Number');
      if (data.hasOwnProperty('quote_trading_symbol'))
        obj.quoteTradingSymbol = ApiClient.convertToType(data['quote_trading_symbol'], 'String');
    }
    return obj;
  }

  /**
   * Name of the currency pair
   * @member {String} baseTradingSymbol
   */
  exports.prototype.baseTradingSymbol = undefined;

  /**
   * Name of the exchange
   * @member {String} exchange
   */
  exports.prototype.exchange = undefined;

  /**
   * Limit depth to extract from the orderbook
   * @member {Number} limit
   */
  exports.prototype.limit = undefined;

  /**
   * Name of the data format availables (standard)
   * @member {String} quoteTradingSymbol
   */
  exports.prototype.quoteTradingSymbol = undefined;

  return exports;

}));