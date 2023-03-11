import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import App from '../../app/App';
import Footer from './Footer';

test('renders a footer element', () => {
    const { getByRole } = render(
        <Footer />
    );

    expect(getByRole(/contentinfo/i)).toBeInTheDocument();
});

test('renders copyright info', () => {
    const { getByText } = render(
        <Footer />
    );

    expect(getByText(/©Jeremaquai2023/)).toBeInTheDocument();
});

