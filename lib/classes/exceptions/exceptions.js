/**
 * @module exceptions/exceptions.js
 *
 * @license MIT, imicros.de (c) 2025 Andreas Leinen
 */
 "use strict";

 class Exception extends Error {
   constructor(attributes = {}) {
       super("");
       // Error.captureStackTrace(this, this.constructor);
       // Error.captureStackTrace(this);
       this.message = this.constructor.name;
       for (const [attribute, value] of Object.entries(attributes)) this[attribute] = value;
   }
}

/** 
  * Exceptions
  */
  // timer
  class InvalidCycle extends Exception {};
  
 module.exports = {
  Exception,
  InvalidCycle
 }  