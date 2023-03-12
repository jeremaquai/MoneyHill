import React from 'react';
import { getByText, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import App from '../../app/App';
import Footer from './Footer';
import { toBeInTheDocument, toBeInTheDOM } from '@testing-library/jest-dom/dist/matchers';

test('renders a footer element', () => {
    const { getByRole } = render(
        <Footer />
    );

    expect(getByRole(/contentinfo/i)).toBeInTheDocument();
});

test('renders the Money Hill name, address, phone, and email', () => {
    const { getByText } = render(
        <Footer />
    );

    expect(getByText(/Money Hill Golf & Country Club/)).toBeInTheDocument();
    expect(getByText(/100 Country Club Drive/)).toBeInTheDocument();
    expect(getByText(/Abita Springs, LA 70420/)).toBeInTheDocument();
    expect(getByText(/ 892-3300/)).toBeInTheDocument();
    expect(getByText(/info@moneyhill.com/)).toBeInTheDocument();
})

test('renders a link to the Money Hill FaceBook page, instagram Page, Twitter Page, and Linkedin Page', () => {
    const { getByRole } = render(
        <Footer />
    );

    expect(getByRole(/facebookLink/i)).toBeInTheDocument();
    expect(getByRole(/instagramLink/i)).toBeInTheDocument();
    expect(getByRole(/twitterLink/i)).toBeInTheDocument();
    expect(getByRole(/linkedinLink/i)).toBeInTheDocument();
})

test('renders copyright info', () => {
    const { getByText } = render(
        <Footer />
    );

    expect(getByText(/©Jeremaquai2023/)).toBeInTheDocument();
});

