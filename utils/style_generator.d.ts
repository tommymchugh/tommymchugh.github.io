/**
 * Copyright (c) Tommy McHugh
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
export declare type Style = string;
export declare type StyleContainer = Map<number, Function>;
/**
 * From a map of style comps to functions, `genStyleBuilder` creates a function
 * that takes a map of component values and style generator function and returns
 * a function that takes props and component type and runs the proper style
 * function with the props value.
 * @param {StyleContainer} styleMap A dictionary of enum component val
 *                                  to style function.
 * @return {Function} The style builder function exported from the styles
 */
export declare function genStyleBuilder(styleMap: StyleContainer): Function;
