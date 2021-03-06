import { Provider } from "react-redux";

import { makeStore } from '@Redux';

export const withRedux = () => (story: any) => (
    <Provider store={makeStore({
        home: {
            version: 1,
        },
        image: {
            url: "",
        },
    })}> {story()}</Provider >
);
