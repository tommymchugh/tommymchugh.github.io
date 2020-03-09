/**
 * Copyright (c) Tommy McHugh
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import * as React from 'react';
interface SectionProps {
    children?: JSX.Element;
    title: string;
}
/**
 * The header of the website including information
 * around my contact info (email, social, etc.), profile
 * picture, and a nice background image
 */
export declare class Section extends React.Component<SectionProps> {
    /**
     * Renders the header element and its sub components
     * on to the webpage
     * @return {JSX.Element} The header react component
     */
    render(): JSX.Element;
}
export {};
