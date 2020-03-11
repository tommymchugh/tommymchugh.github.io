/**
 * Copyright (c) Tommy McHugh
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import styled, {css} from 'styled-components';
import {styles, Component} from '../../styles/card.jss';

interface CardProps {
  children?: JSX.Element;
  color: string;
  accent: string;
  logo: string;
}

// tslint:disable-next-line: variable-name
const CardContainer = styled.div`
  ${styles(Component.Container)}
  ${(props) =>
    css`
      background: url('${props.theme}') ${props.color};
    `}
`;

/**
 * The header of the website including information
 * around my contact info (email, social, etc.), profile
 * picture, and a nice background image
 */
export class Card extends React.Component<CardProps> {
  /**
   * Renders the header element and its sub components
   * on to the webpage
   * @return {JSX.Element} The header react component
   */
  render(): JSX.Element {
    return (
      <CardContainer
        className="card"
        color={this.props.color}
        theme={this.props.accent}
      >
        <img src={this.props.logo} />
      </CardContainer>
    );
  }
}
