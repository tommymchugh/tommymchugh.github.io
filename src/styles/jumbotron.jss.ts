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
        overflow: hidden;
        position: relative;
        margin-top: -3px;
        padding-top: 70px;
        padding-bottom: 70px;
        padding-left: 30px;
        padding-right: 30px;
        background: ${theme.colors.primary};
    `;
  }
);
export const styles = genStyleBuilder(editorStylesMap);
