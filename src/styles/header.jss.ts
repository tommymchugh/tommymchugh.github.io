/**
 * Copyright (c) Tommy McHugh
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {theme} from './theme.jss';
import {Style, StyleContainer, genStyleBuilder} from '../utils/utils';
import headerBackground from '../../static/images/header_bg.jpeg';

export enum Component {
  Container
}

const editorStylesMap: StyleContainer = new Map();

editorStylesMap.set(
  Component.Container,
  (props?: {}): Style => {
    return `
      background: url('${headerBackground}') black;
      background-size: cover;
      background-position: bottom;
      height: ${theme.heights.header}px;
      overflow:hidden;
      width: 100%;
    `;
  }
);
export const styles = genStyleBuilder(editorStylesMap);
