/**
 * Copyright (c) Tommy McHugh
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Prepares the HTML document to initialize the application
 * by creating the elements that react needs to attach to.
 * @return {HTMLElement} The newly create root attached to body.
 */
export function scaffoldApp(): HTMLElement {
  const appRoot = document.createElement('div');
  appRoot.id = 'root';
  document.body.appendChild(appRoot);
  return appRoot;
}
