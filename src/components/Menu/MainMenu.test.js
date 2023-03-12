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

test('renders the appropriate links in menu', () => {
    const { getByRole } = render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    
    expect(getByRole(/homeLink/i)).toBeInTheDocument();
    
    expect(getByRole(/aboutlink/i)).toBeInTheDocument();
    expect(getByRole(/natureLink/i)).toBeInTheDocument();
    expect(getByRole(/historyLink/i)).toBeInTheDocument();
    
    expect(getByRole(/amenitiesLink/i)).toBeInTheDocument();
    expect(getByRole(/clubhouseLink/i)).toBeInTheDocument();
    expect(getByRole(/GolfLink/i)).toBeInTheDocument();
    expect(getByRole(/tennisLink/i)).toBeInTheDocument();
    expect(getByRole(/fitnessLink/i)).toBeInTheDocument();
    expect(getByRole(/OutdoorsLink/i)).toBeInTheDocument();

    expect(getByRole(/eventsLink/i)).toBeInTheDocument();
    expect(getByRole(/weddingsLink/i)).toBeInTheDocument();
    expect(getByRole(/tournamentsLink/i)).toBeInTheDocument();
    expect(getByRole(/businessLink/i)).toBeInTheDocument();
    
    expect(getByRole(/activitiesLink/i)).toBeInTheDocument();
    expect(getByRole(/youthLink/i)).toBeInTheDocument();
    expect(getByRole(/groupsLink/i)).toBeInTheDocument();

    expect(getByRole(/membershipLink/i)).toBeInTheDocument();
    
    expect(getByRole(/residentialLink/i)).toBeInTheDocument();
    expect(getByRole(/commapLink/i)).toBeInTheDocument();
    expect(getByRole(/homesLink/i)).toBeInTheDocument();
    expect(getByRole(/landLink/i)).toBeInTheDocument();
    expect(getByRole(/cottagesLink/i)).toBeInTheDocument();
    expect(getByRole(/resourcesLink/i)).toBeInTheDocument();
});

