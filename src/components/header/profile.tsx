/**
 * Copyright (c) Tommy McHugh
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import styled from 'styled-components';
import {styles, Component} from '../../styles/profile.jss';
import profilePic from '../../../static/images/profile.jpeg';

// tslint:disable-next-line: variable-name
const ProfileContainer = styled.div`
  ${styles(Component.Container)}
`;

// tslint:disable-next-line: variable-name
const ProfileTitle = styled.h1`
  ${styles(Component.Title)}
`;

// tslint:disable-next-line: variable-name
const ProfilePicture = styled.img`
  ${styles(Component.Picture)}
`;

/**
 * The header of the website including information
 * around my contact info (email, social, etc.), profile
 * picture, and a nice background image
 */
class Profile extends React.Component {
  /**
   * Renders the header element and its sub components
   * on to the webpage
   * @return {JSX.Element} The header react component
   */
  render(): JSX.Element {
    return (
      <ProfileContainer>
        <ProfilePicture src={profilePic} />
        <ProfileTitle>Tommy McHugh</ProfileTitle>
      </ProfileContainer>
    );
  }
}

const styledProfile = styled(Profile)``;
export {styledProfile as Profile};
