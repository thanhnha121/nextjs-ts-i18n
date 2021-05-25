import React from "react";

import { Container } from "@Styled/Home";
import { Heading } from "./index";

export default {
    component: Heading,
    title: "Heading",
};

export const Default = () => (
    <Container>
        <Heading text="Hello World" />
    </Container>
);
