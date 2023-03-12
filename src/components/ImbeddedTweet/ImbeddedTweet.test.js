import React from "react";
import { render } from "@testing-library/react";

import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import ImbeddedTweet from "./ImbeddedTweet";

test('renders an Iframe linked to a tweet', () => {
    const { getByRole } = render(
        <ImbeddedTweet />
    );

    expect(getByRole(/document/i)).toBeInTheDocument();
});