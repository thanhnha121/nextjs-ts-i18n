import { addDecorator, addParameters } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import {theme} from "@Definitions/Styled"
import {withRedux, withI18next} from "./Decorators"

addDecorator(withThemesProvider([{name: "light", ...theme}]));
addDecorator(withKnobs);
addDecorator(withRedux());
addDecorator(withI18next());

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS,
    },
});