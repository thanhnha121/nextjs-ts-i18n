import React from "react";
/* eslint-disable import/no-extraneous-dependencies */
import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs";
/* eslint-enable import/no-extraneous-dependencies */

import { Apod, ApodButton } from "@Styled/Home";
import { LocaleButton } from "./index";

export default {
    component: LocaleButton,
    title: "LocaleButton",
};

export const Default = () => (
    <Apod>
        <ApodButton>
            <LocaleButton
                lang={select("Language", ["tr", "en", "es"], "tr")}
                isActive={boolean("Active", true)}
                onClick={action("button-click")}
            />
        </ApodButton>
    </Apod>
);
