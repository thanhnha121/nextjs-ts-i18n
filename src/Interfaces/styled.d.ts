import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            primary: string;
            notFoundHeading: string;
            notFoundBackToHomeButtonColor: string;
            notFoundBackToHomeButtonBg: string;
        };
    }
}
