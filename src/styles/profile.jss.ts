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
      width: 270px;
      height: 195px;
      margin: 37px auto;
      margin-bottom: 3px;
    `;
  }
);

editorStylesMap.set(
  Component.Title,
  (props?: {}): Style => {
    return `
      color: ${theme.colors.primaryLight};
      text-transform: uppercase;
      font-weight: 600;
      text-align: center;
      width: 100%;
    `;
  }
);

editorStylesMap.set(
  Component.Picture,
  (props?: {}): Style => {
    return `
      width: 140px;
      border: 6px solid ${theme.colors.primaryLight};
      border-radius: 100%;
      margin: 0 auto;
      margin-bottom: 10px;
      display: block;
    `;
  }
);

export const styles = genStyleBuilder(editorStylesMap);
