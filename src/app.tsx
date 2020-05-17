/**
 * Copyright (c) Tommy McHugh
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';
import {styles} from './styles/app.jss';

import {Container} from './components/container';
import {Header} from './components/header/header';
import {Jumbotron} from './components/jumbotron';
import {Section} from './components/section';
import {Footer} from './components/footer';
import {ProjectShowcase} from './components/project_showcase';

/**
 * The main interface to all Bridigital UI components.
 */
class App extends React.Component {
  /**
   * The render function that will create and maintain
   * the Bridigital application.
   * @return {JSX.Element} The react element(s) that will be rendered.
   */
  render(): JSX.Element {
    return (
      <Container>
        <div className="content">
          <Header />
          <Jumbotron />
          <Section title="Research Initiatives">
            <ProjectShowcase />
          </Section>
          <Section title="News & Events">
            <p className="center">
              06/22/20 - Excited that I will be working as a Technical Program
              Manager Intern at <a href="https://ai.google">Google Brain</a>{' '}
              during the summer of 2020.
            </p>
          </Section>
          <Section title="Publications">
            <p className="center">Coming Soon...</p>
          </Section>
        </div>
        <Footer />
      </Container>
    );
  }
}

/**
 * Renders the react application onto the root element.
 * @param {HTMLElement} root The html element the react app will be attach to.
 */
export function createApp(root: HTMLElement) {
  // tslint:disable-next-line: variable-name
  const StyledApp = styled(App)`
    ${styles()}
  `;
  ReactDOM.render(<StyledApp />, root);
}
