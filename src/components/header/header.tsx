/**
 * Copyright (c) Tommy McHugh
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import styled from 'styled-components';
import {styles, Component} from '../../styles/header.jss';
import {Profile} from './profile';

// tslint:disable-next-line: variable-name
const HeaderContainer = styled.div`
  ${styles(Component.Container)}
`;

/**
 * The header of the website including information
 * around my contact info (email, social, etc.), profile
 * picture, and a nice background image
 */
class Header extends React.Component {
  /**
   * Renders the header element and its sub components
   * on to the webpage
   * @return {JSX.Element} The header react component
   */
  render(): JSX.Element {
    return (
      <HeaderContainer>
        <Profile />
        <p className="light center">
          <a href="mailto:mchugh@u.northwestern.edu" className="highlight">
            mchugh@u.northwestern.edu
          </a>
        </p>
      </HeaderContainer>
    );
  }
}

const styledHeader = styled(Header)``;
export {styledHeader as Header};
