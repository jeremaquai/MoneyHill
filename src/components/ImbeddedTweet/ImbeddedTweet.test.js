import React from "react";
import { render } from "@testing-library/react";

import Footer from "../Footer/Footer";

test('renders an Iframe linked to a tweet', () => {
    const { getByRole } = render(
        <Footer />
    );

    expect(getByRole(/document/i)).toBeInTheDocument();
});