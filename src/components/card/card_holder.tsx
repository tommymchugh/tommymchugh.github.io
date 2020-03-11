/**
 * Copyright (c) Tommy McHugh
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import styled, {css} from 'styled-components';
import {styles, Component} from '../../styles/card_holder.jss';

interface CardHolderProps {
  children?: JSX.Element[];
}

// tslint:disable-next-line: variable-name
const CardHolderContainer = styled.div`
  ${styles(Component.Container)}
`;

/**
 * The header of the website including information
 * around my contact info (email, social, etc.), profile
 * picture, and a nice background image
 */
export class CardHolder extends React.Component<CardHolderProps> {
  /**
   * Renders the header element and its sub components
   * on to the webpage
   * @return {JSX.Element} The header react component
   */
  render(): JSX.Element {
    return (
      <CardHolderContainer className="card-holder">
        {this.props.children}
      </CardHolderContainer>
    );
  }
}
