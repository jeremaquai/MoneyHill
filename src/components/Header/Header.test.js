import React from "react";
import { render } from "@testing-library/react";

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "../../app/App";
import { store } from "../../app/store";
import Header from "./Header";

test('renders a Header element', () => {
    const { getByRole } = render(
        <Provider store={store}>
            <Router >
                <Header />
            </Router >
        </Provider>
      );

    expect(getByRole(/banner/i)).toBeInTheDocument();
});

test('renders a Contact Us and Login Link', () => {
    const {getByText} = render(
        <Provider store={store}>
            <Router >
                <Header />
            </Router >
        </Provider>
    );

    expect(getByText(/contact us/i)).toBeInTheDocument();
    expect(getByText(/login/i)).toBeInTheDocument();
});

test('renders the Money Hill Logo', () => {
    const {getByAltText} = render(
        <Provider store={store}>
            <Router >
                <Header />
            </Router >
        </Provider>
    );

    expect(getByAltText(/The Money Hill Logo/i)).toBeInTheDocument();
});

