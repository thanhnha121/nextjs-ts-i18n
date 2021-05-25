import * as React from "react";
import { NextPage } from "next";

import { withTranslation, useTranslation } from "next-i18next";

import { HomeActions } from "@Actions";

import { IHomePage, ReduxNextPageContext } from "@Interfaces";

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = () => {
    const { t, i18n } = useTranslation("common");

    return (
        <div
            style={{
                display: "flex",
                height: "100vh",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div>
                <div
                    style={{
                        padding: 10,
                        fontSize: 48,
                        color: "#ddd",
                        fontWeight: "bold",
                    }}
                >
                    Select Language:
                </div>
                <div>
                    <div>
                        {["en", "tr"].map(lang => (
                            <div
                                aria-hidden="true"
                                key={lang}
                                onClick={() => {
                                    i18n.changeLanguage(lang);
                                }}
                                role="button"
                                style={{
                                    fontSize: 24,
                                    width: "calc(50% - 20px)",
                                    display: "inline-block",
                                    margin: 10,
                                    background:
                                        i18n.language === lang
                                            ? "#ccc"
                                            : "#eee",
                                    padding: "10px 20px",
                                    borderRadius: 10,
                                    textAlign: "center",
                                    fontWeight: "bolder",
                                }}
                            >
                                {lang}
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    style={{
                        padding: 10,
                        fontSize: 32,
                        color: "#ddd",
                        fontWeight: "bold",
                    }}
                >
                    Results:
                </div>
                <div
                    style={{
                        padding: "0 10px",
                        fontSize: 28,
                        lineHeight: 1.5,
                        fontWeight: "lighter",
                        color: "#555",
                    }}
                >
                    <div>{`Hello - ${t("common:Hello")}`}</div>
                    <div>{`World - ${t("common:World")}`}</div>
                </div>
            </div>
        </div>
    );
};

Home.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IHomePage.InitialProps> => {
    await ctx.store.dispatch(
        HomeActions.GetApod({
            params: { hd: true },
        })
    );
    return { namespacesRequired: ["common"] };
};

const Extended = withTranslation("common")(Home);

export default Extended;
