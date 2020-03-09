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
      width: 100%;
      margin-top: 21px;
    `;
  }
);
export const styles = genStyleBuilder(editorStylesMap);
