/**
 * Copyright (c) Tommy McHugh
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {theme} from './theme.jss';
import {Style, StyleContainer, genStyleBuilder} from '../utils/utils';

export enum Component {
  Container,
  Title,
  Picture
}

const editorStylesMap: StyleContainer = new Map();

editorStylesMap.set(
  Component.Container,
  (props?: {}): Style => {
    return `
      width: fit-content;
      height: fit-content;
      margin: 37px auto;
      margin-bottom: 3px;
    `;
  }
);

editorStylesMap.set(
  Component.Title,
  (props?: {}): Style => {
    return `
        color: white;
        text-transform: uppercase;
        font-weight: 400;
        text-align: center;
        width: fit-content;
        letter-spacing: 12px;
        filter: drop-shadow(3px 0px 0px #002033);
        font-size: 35px;
    `;
  }
);

editorStylesMap.set(
  Component.Picture,
  (props?: {}): Style => {
    return `
      width: 170px;
      border-radius: 100%;
      box-shadow: 0px 3px 7px 3px #282f3fb3;
      margin: 0 auto;
      margin-bottom: 10px;
      display: block;
    `;
  }
);

export const styles = genStyleBuilder(editorStylesMap);
