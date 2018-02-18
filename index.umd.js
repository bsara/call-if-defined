/**
 * @license
 *
 * ISC License (ISC)
 *
 * Copyright (c) 2018, Brandon D. Sara (https://bsara.pro/)
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 * OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([ 'call-if' ], factory);
    return;
  }
  if (typeof exports === 'object') {
    module.exports = factory(reqiure('call-if'));
    return;
  }
  var exported = factory(root);

  root.callIfDefined     = exported.callIfDefined;
  root.callIfDefinedNull = exported.callIfDefinedNull;
})(this, function(modules) {

  /**
   * @param  {?Function} func         - The function to be called, if it is defined.
   * @param  {...[type]} [funcParams] - The paramters to pass to `func`, if `func` is
   *                                    defined.
   *
   * @return {?*} Result of calling `func` with the given `funcParams`, if `func` is
   *              defined; otherwise, returns `null`.
   */
  function callIfDefinedNull(func) {
    return callIfOrNull((func != null), func, Array.prototype.slice.call(arguments, 2));
  }


  /**
   * @param  {?Function} func         - The function to be called, if it is defined.
   * @param  {...[type]} [funcParams] - The paramters to pass to `func`, if `func` is
   *                                    defined.
   *
   * @return {?*} Result of calling `func` with the given `funcParams`, if `func` is
   *              defined; otherwise, returns `undefined`.
   */
  function callIfDefined(condition, func) {
    return callIf((func != null), func, Array.prototype.slice.call(arguments, 2));
  }



  return {
    callIfDefined:     callIfDefined,
    callIfDefinedNull: callIfDefinedNull
  };
});
