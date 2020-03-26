/**
 * Copyright (c) Tommy McHugh
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import styled from 'styled-components';
import {styles, Component} from '../styles/footer.jss';
import itlLogo from '../../static/images/itl-logo.png';
import deltaLogo from '../../static/images/delta-logo.png';

// tslint:disable-next-line: variable-name
const FooterContainer = styled.div`
  ${styles(Component.Container)}
`;

// tslint:disable-next-line: variable-name
const FooterOrgContainer = styled.div`
  ${styles(Component.OrgContainer)}
`;

// tslint:disable-next-line: variable-name
const OrgImage = styled.img`
  ${styles(Component.OrgImage)}
`;

/**
 * The header of the website including information
 * around my contact info (email, social, etc.), profile
 * picture, and a nice background image
 */
export class Footer extends React.Component {
  /**
   * Renders the header element and its sub components
   * on to the webpage
   * @return {JSX.Element} The header react component
   */
  render(): JSX.Element {
    return (
      <FooterContainer>
        <h2 className="invert">Affiliated Organizations</h2>
        <FooterOrgContainer>
          <a href="https://inclusive.northwestern.edu">
            <OrgImage
              src={itlLogo}
              className="spacer"
              alt="Inclusive Technology Lab"
            />
          </a>
          <a href="http://dtr.northwestern.edu">
            <OrgImage src={deltaLogo} alt="Delta Lab" />
          </a>
        </FooterOrgContainer>
      </FooterContainer>
    );
  }
}
