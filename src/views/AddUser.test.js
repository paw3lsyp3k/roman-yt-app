import React from 'react';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import { screen, fireEvent } from '@testing-library/dom';
import { renderWithProviders } from '../helpers/renderWithThemeProvider'

describe('Form Field', ()=> {
    it('Adds new user to the list', () => {
        renderWithProviders(
            <>
                <AddUser/>
                <Dashboard />
            </>
        );
        fireEvent.change(screen.getByTestId('Name'), {target: {value: 'Zdzisek'}})
        fireEvent.change(screen.getByTestId('Attendance'), {target: {value: '55'}})
        fireEvent.change(screen.getByTestId('Average'), {target: {value: '4.5'}})
        fireEvent.click(screen.getByTestId('Consent'))
        fireEvent.click(screen.getByText('Add'));

        screen.getByText('Zdzisek');
    });
    it('Prevents adding user if the consent is not checked', () => {
        renderWithProviders(
            <>
                <AddUser/>
                <Dashboard />
            </>
        );
        fireEvent.change(screen.getByTestId('Name'), {target: {value: 'Zdzisek'}})
        fireEvent.change(screen.getByTestId('Attendance'), {target: {value: '55'}})
        fireEvent.change(screen.getByTestId('Average'), {target: {value: '4.5'}})
        fireEvent.click(screen.getByText('Add'));

        const newUser = screen.queryByText('Zdzisek');
        expect(newUser).not.toBeInTheDocument();


    });
});

