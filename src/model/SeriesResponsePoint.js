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
    root.Brainrex.SeriesResponsePoint = factory(root.Brainrex.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SeriesResponsePoint model module.
   * @module model/SeriesResponsePoint
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SeriesResponsePoint</code>.
   * @alias module:model/SeriesResponsePoint
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>SeriesResponsePoint</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SeriesResponsePoint} obj Optional instance to populate.
   * @return {module:model/SeriesResponsePoint} The populated <code>SeriesResponsePoint</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('timestamp'))
        obj.timestamp = ApiClient.convertToType(data['timestamp'], 'Date');
      if (data.hasOwnProperty('isAnomaly'))
        obj.isAnomaly = ApiClient.convertToType(data['isAnomaly'], 'Boolean');
    }
    return obj;
  }

  /**
   * 2012-01-01T20:30:43Z
   * @member {Date} timestamp
   */
  exports.prototype.timestamp = undefined;

  /**
   * @member {Boolean} isAnomaly
   */
  exports.prototype.isAnomaly = undefined;

  return exports;

}));