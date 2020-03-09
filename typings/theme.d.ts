import 'styled-components';

declare module 'styled-components' {
  export interface Theme {
    colors: {
      backgroundLight: string
      backgroundDark: string,
      primaryLight: string,
      primary: string,
      primaryDark: string,
      footer: string
    },
    heights: {
      header: number,
      jumbotron: number,
      footer: number
    }
  }
}
