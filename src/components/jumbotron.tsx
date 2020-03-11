/**
 * Copyright (c) Tommy McHugh
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import styled from 'styled-components';
import {styles, Component} from '../styles/jumbotron.jss';

// tslint:disable-next-line: variable-name
const JumbotronContainer = styled.div`
  ${styles(Component.Container)}
`;

/**
 * The header of the website including information
 * around my contact info (email, social, etc.), profile
 * picture, and a nice background image
 */
export class Jumbotron extends React.Component {
  /**
   * Renders the header element and its sub components
   * on to the webpage
   * @return {JSX.Element} The header react component
   */
  render(): JSX.Element {
    return (
      <JumbotronContainer>
        <p className="light large center italic skinny">
          Undergraduate HCI researcher at
          <span className="northwestern">
            <a href="https://hci.northwestern.edu"> Northwestern University</a>
          </span>
          <br />
          designing at the intersection of technology,
          <br />
          learning, creativity, and accessibility.
        </p>
      </JumbotronContainer>
    );
  }
}