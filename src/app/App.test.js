import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

test('renders a header element', () => {
  const { getByRole } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByRole(/banner/i)).toBeInTheDocument();
});

test('renders a footer', () => {
  const { getByRole } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByRole(/contentinfo/i)).toBeInTheDocument();
});

test('renders a Nav menu', () => {
  const { getByRole } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByRole(/navigation/i)).toBeInTheDocument();
});