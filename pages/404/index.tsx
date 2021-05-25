import * as React from "react";
import { NextPage } from "next";

import { Container, TopText, ApodButton } from "@Styled/Home";
import Link from "next/link";

import { IErrorPage } from "@Interfaces";

const Custom404: NextPage<IErrorPage.IProps, IErrorPage.InitialProps> = () => {
    return (
        <Container>
            <TopText>404</TopText>
            <TopText>NOT FOUND</TopText>
            <Link href="/">
                <ApodButton>GO HOME</ApodButton>
            </Link>
        </Container>
    );
};

export default Custom404;
