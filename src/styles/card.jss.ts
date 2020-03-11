/**
 * Copyright (c) Tommy McHugh
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {theme} from './theme.jss';
import {Style, StyleContainer, genStyleBuilder} from '../utils/utils';

export enum Component {
  Container
}

const editorStylesMap: StyleContainer = new Map();

editorStylesMap.set(
  Component.Container,
  (props?: {}): Style => {
    return `
      transition: all .2s;
      position: relative;
      cursor: pointer;
      height: 100%;
      width: 380px;
      display: inline-block;
      background-size: cover !important;
      box-shadow: 0px 1px 20px 3px rgba(0, 0, 0, 0.50);
    `;
  }
);
export const styles = genStyleBuilder(editorStylesMap);
