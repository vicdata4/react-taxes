import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TaxesTable from '../components/TaxesTable/TaxesTable';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { expect } from 'chai';

const mockStore = configureStore([]);

describe('Taxes table', () => {
    let store;
    let component;

    beforeEach(() => {
        store = mockStore({
            taxes: { list: [] },
        });

        component = mount(
            <Provider store={store}>
                <Router>
                    <TaxesTable />
                </Router>
            </Provider>
        );
    });

    it('Default length', () => {
        expect(component.find('li').length).equal(0);
    });

    it('Display no taxes message', () => {
        expect(component.find('.center-align').exists()).equal(true);
    });
});

describe('Table with rows', () => {
    let store;
    let component;

    beforeEach(async () => {
        store = mockStore({
            taxes: {
                list: [
                    { id: 1, name: 'a' },
                    { id: 2, name: 'b' },
                    { id: 3, name: 'c' }
                ]
            },
        });

        component = mount(
            <Provider store={store}>
                <Router>
                    <TaxesTable />
                </Router>
            </Provider>
        );
    });

    it('Passing elements', async () => {
        expect(component.find('li').length).equal(3);
    });

    it('Not display no taxes message', () => {
        expect(component.find('.center-align').exists()).equal(false);
    });
});
