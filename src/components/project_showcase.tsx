/**
 * Copyright (c) Tommy McHugh
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import {CardHolder} from './card/card_holder';
import {Card} from './card/card';

import v11Accent from '../../static/images/v11_card_accent.png';
import imAccent from '../../static/images/inclusive_music_card_accent.png';
import consAccent from '../../static/images/constructive_card_accent.png';

import v11Logo from '../../static/images/v11_logo_vector.svg';
import imLogo from '../../static/images/inclusive_music_logo_vector.svg';
import consLogo from '../../static/images/constructive_logo_vector.svg';

/**
 * The header of the website including information
 * around my contact info (email, social, etc.), profile
 * picture, and a nice background image
 */
export class ProjectShowcase extends React.Component {
  /**
   * Renders the header element and its sub components
   * on to the webpage
   * @return {JSX.Element} The header react component
   */
  render(): JSX.Element {
    return (
      <CardHolder>
        <Card
          color="#282745"
          accent={v11Accent}
          logo={v11Logo}
          description="V11 Accessibility Research"
        />
        <Card
          color="#904C77"
          accent={imAccent}
          logo={imLogo}
          description="Inclusive Music Research"
        />
        <Card
          color="#91C0E8"
          accent={consAccent}
          logo={consLogo}
          description="Constructive Learning Research"
        />
      </CardHolder>
    );
  }
}
