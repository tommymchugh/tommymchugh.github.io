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
  OrgContainer,
  OrgImage
}

const editorStylesMap: StyleContainer = new Map();

editorStylesMap.set(
  Component.Container,
  (props?: {}): Style => {
    return `
        background: ${theme.colors.footer};
        width: 100%;
        height: ${theme.heights.footer}px;
        margin-top: 21px;
        padding-top: 21px;

    `;
  }
);

editorStylesMap.set(
  Component.OrgContainer,
  (props?: {}): Style => {
    return `
      margin: 37px auto;
      width: fit-content;
    `;
  }
);

editorStylesMap.set(
  Component.OrgImage,
  (props?: {}): Style => {
    return `
      width: 75px;
    `;
  }
);

export const styles = genStyleBuilder(editorStylesMap);
