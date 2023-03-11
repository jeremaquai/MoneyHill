import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import App from '../../app/App';

test('renders a navigation menu', () => {
    const { getByRole } = render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    expect(getByRole(/navigation/i)).toBeInTheDocument();
});

test('renders an About Us link', () => {
    const { getByText } = render(
        <Provider store={store}>
            <App />
        </Provider>
    );
  
    expect(getByText(/about us/i)).toBeInTheDocument();
});

test('renders a Nature link', () => {
    const { getByText } = render(
        <Provider store={store}>
            <App />
        </Provider>
    );
  
    expect(getByText(/nature/i)).toBeInTheDocument();
});

test('renders a History link', () => {
    const { getByText } = render(
        <Provider store={store}>
            <App />
       </Provider>
    );
  
    expect(getByText(/history/i)).toBeInTheDocument();
});

test('renders an events link', () => {
    const { getByText } = render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    expect(getByText(/events/i)).toBeInTheDocument();
});  

test('renders an Amenities link', () => {
    const { getByText } = render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    expect(getByText(/amenities/i)).toBeInTheDocument();
});

test('renders an About Us link', () => {
    const { getAllByText } = render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    expect(getAllByText(/activities/i)).toBeTruthy();
});

test('renders a Membership link', () => {
    const { getByText } = render(
        <Provider store={store}>
            <App />
        </Provider>
    );
  
    expect(getByText(/membership/i)).toBeInTheDocument();
});

test('renders a Residential link', () => {
    const { getByText } = render(
        <Provider store={store}>
            <App />
        </Provider>
    );
  
    expect(getByText(/residential/i)).toBeInTheDocument();
});