import React from "react";
import { render, getByTitle } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import App from "../../app/App";

import SideBar from "./SideBar";

test('renders a sidebar', () => {
    const { getByTitle } = render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    expect(getByTitle(/sidebar/i)).toBeInTheDocument();
})