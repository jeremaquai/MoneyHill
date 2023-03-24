import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store, testStore } from '../../app/store';
import { BrowserRouter as Router } from 'react-router-dom';
import MainMenu from './MainMenu';


describe('MainMenu Component Function', () => {

    it('renders a navigation menu', () => {
        const { getByRole } = render(
            <Provider store={store}>
                <Router>
                    <MainMenu />
                </Router>
            </Provider>
        );
    
        expect(getByRole(/navigation/i)).toBeInTheDocument();
    });

    it('renders the appropriate starting links in the menu', () => {
        const { getByRole } = render(
            <Provider store={store}>
                <Router>
                    <MainMenu />
                </Router>
            </Provider>
        );
        
        expect(getByRole(/homeLink/i)).toBeInTheDocument(); 
        expect(getByRole(/aboutlink/i)).toBeInTheDocument();
        expect(getByRole(/amenitiesLink/i)).toBeInTheDocument();
        expect(getByRole(/eventsLink/i)).toBeInTheDocument();
        expect(getByRole(/activitiesLink/i)).toBeInTheDocument();
        expect(getByRole(/membershipLink/i)).toBeInTheDocument();
        expect(getByRole(/residentialLink/i)).toBeInTheDocument();
        
    });

    it('renders the About Us subMenu when the expand button is fired', () => {
        render (
            <Provider store={store}>
                <Router>
                    <MainMenu />
                </Router>
            </Provider>
        );

        const button = screen.getByTestId(/AboutLinkButton/i)

        expect(screen.queryByRole(/naturelink/i)).toBeNull();
        expect(screen.queryByRole(/historyLink/i)).toBeNull();

        fireEvent.click(button);

        expect(screen.getByRole(/natureLink/i)).toBeInTheDocument();
        expect(screen.getByRole(/historyLink/i)).toBeInTheDocument();
        
        fireEvent.click(button);

        expect(screen.queryByRole(/naturelink/i)).toBeNull();
        expect(screen.queryByRole(/historyLink/i)).toBeNull()
    });

    it('renders the Amenities Submenu when the expand button is fired', () => {
        render (
            <Provider store={store}>
                <Router>
                    <MainMenu />
                </Router>
            </Provider>
        );

        const button = screen.getByTestId(/AmenitiesLinkButton/i);

        expect(screen.queryByRole(/clubhouseLink/i)).toBeNull();
        expect(screen.queryByRole(/GolfLink/i)).toBeNull();
        expect(screen.queryByRole(/tennisLink/i)).toBeNull();
        expect(screen.queryByRole(/fitnessLink/i)).toBeNull();
        expect(screen.queryByRole(/OutdoorsLink/i)).toBeNull();

        fireEvent.click(button);

        expect(screen.getByRole(/clubhouseLink/i)).toBeInTheDocument();
        expect(screen.getByRole(/GolfLink/i)).toBeInTheDocument();
        expect(screen.getByRole(/tennisLink/i)).toBeInTheDocument();
        expect(screen.getByRole(/fitnessLink/i)).toBeInTheDocument();
        expect(screen.getByRole(/OutdoorsLink/i)).toBeInTheDocument();

        fireEvent.click(button);

        expect(screen.queryByRole(/clubhouseLink/i)).toBeNull();
        expect(screen.queryByRole(/GolfLink/i)).toBeNull();
        expect(screen.queryByRole(/tennisLink/i)).toBeNull();
        expect(screen.queryByRole(/fitnessLink/i)).toBeNull();
        expect(screen.queryByRole(/OutdoorsLink/i)).toBeNull();
    });

    it('renders the Events SubMenu when the expand button is fired', () => {
        render (
            <Provider store={store}>
                <Router>
                    <MainMenu />
                </Router>
            </Provider>
        );

        const button = screen.getByTestId(/EventsLinkButton/i);

        expect(screen.queryByRole(/weddingsLink/i)).toBeNull();
        expect(screen.queryByRole(/tournamentsLink/i)).toBeNull();
        expect(screen.queryByRole(/businessLink/i)).toBeNull();

        fireEvent.click(button);

        expect(screen.getByRole(/weddingsLink/i)).toBeInTheDocument();
        expect(screen.getByRole(/tournamentsLink/i)).toBeInTheDocument();
        expect(screen.getByRole(/businessLink/i)).toBeInTheDocument();

        fireEvent.click(button);

        expect(screen.queryByRole(/weddingsLink/i)).toBeNull();
        expect(screen.queryByRole(/tournamentsLink/i)).toBeNull();
        expect(screen.queryByRole(/businessLink/i)).toBeNull();
    });

    it('renders the Activities SubMenu when the expand button is fired', () => {
        render (
            <Provider store={store}>
                <Router>
                    <MainMenu />
                </Router>
            </Provider>
        );

        const button = screen.getByTestId(/ActivitiesLinkButton/i);

        expect(screen.queryByRole(/youthLink/i)).toBeNull();
        expect(screen.queryByRole(/groupsLink/i)).toBeNull();

        fireEvent.click(button);

        expect(screen.getByRole(/youthLink/i)).toBeInTheDocument();
        expect(screen.getByRole(/groupsLink/i)).toBeInTheDocument();

        fireEvent.click(button);

        expect(screen.queryByRole(/youthLink/i)).toBeNull();
        expect(screen.queryByRole(/groupsLink/i)).toBeNull();
    });

    it('renders the Residetial Submenus when the expand button is fired', () => {
        render (
            <Provider store={store}>
                <Router>
                    <MainMenu />
                </Router>
            </Provider>
        );

        const button = screen.getByTestId(/ResidentialLinkButton/i);

        expect(screen.queryByRole(/commapLink/i)).toBeNull();
        expect(screen.queryByRole(/homesLink/i)).toBeNull();
        expect(screen.queryByRole(/landLink/i)).toBeNull();
        expect(screen.queryByRole(/cottagesLink/i)).toBeNull();
        expect(screen.queryByRole(/resourcesLink/i)).toBeNull();

        fireEvent.click(button);

        expect(screen.getByRole(/commapLink/i)).toBeInTheDocument();
        expect(screen.getByRole(/homesLink/i)).toBeInTheDocument();
        expect(screen.getByRole(/landLink/i)).toBeInTheDocument();
        expect(screen.getByRole(/cottagesLink/i)).toBeInTheDocument();
        expect(screen.getByRole(/resourcesLink/i)).toBeInTheDocument();

        fireEvent.click(button);

        expect(screen.queryByRole(/commapLink/i)).toBeNull();
        expect(screen.queryByRole(/homesLink/i)).toBeNull();
        expect(screen.queryByRole(/landLink/i)).toBeNull();
        expect(screen.queryByRole(/cottagesLink/i)).toBeNull();
        expect(screen.queryByRole(/resourcesLink/i)).toBeNull();
    });

    it('renders a menu button when in mobile status', () => {
        render (
            <Provider store={testStore}>
                <Router>
                    <MainMenu />
                </Router>
            </Provider>
        );

        const button = screen.getByTestId(/ResidentialLinkButton/i);

        expect(getByRole(/homeLink/i)).toBeInTheDocument(); 
        expect(getByRole(/aboutlink/i)).toBeInTheDocument();
        expect(getByRole(/amenitiesLink/i)).toBeInTheDocument();
        expect(getByRole(/eventsLink/i)).toBeInTheDocument();
        expect(getByRole(/activitiesLink/i)).toBeInTheDocument();
        expect(getByRole(/membershipLink/i)).toBeInTheDocument();
        expect(getByRole(/residentialLink/i)).toBeInTheDocument();
    });
})




