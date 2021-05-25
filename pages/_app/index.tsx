import * as React from "react";
import App, { AppInitialProps, AppContext } from "next/app";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import withRedux from "next-redux-wrapper";

import { theme } from "@Definitions/Styled";
import { appWithTranslation } from "next-i18next";
import { AppWithStore } from "@Interfaces";
import { makeStore } from "@Redux";

import "@Static/css/main.scss";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

if (!i18n.isInitialized) {
    i18n.use(HttpApi)
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            ns: ["common"],
            debug: false,
            fallbackLng: "en",
            react: {
                useSuspense: false,
            },
        });
}


class WebApp extends App<AppWithStore> {
    static async getInitialProps({
        Component,
        ctx,
    }: AppContext): Promise<AppInitialProps> {
        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {};

        return { pageProps };
    }

    render() {
        const { Component, pageProps, store } = this.props;

        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </Provider>
        );
    }
}

export default withRedux(makeStore)(
    appWithTranslation(WebApp, {
        defaultLanguage: "en",
        otherLanguages: ["tr"],
        localePath: "./public/locales",
    })
);
