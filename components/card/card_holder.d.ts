/**
 * Copyright (c) Tommy McHugh
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import * as React from 'react';
interface CardHolderProps {
    children?: JSX.Element[];
}
/**
 * The header of the website including information
 * around my contact info (email, social, etc.), profile
 * picture, and a nice background image
 */
export declare class CardHolder extends React.Component<CardHolderProps> {
    /**
     * Renders the header element and its sub components
     * on to the webpage
     * @return {JSX.Element} The header react component
     */
    render(): JSX.Element;
}
export {};
