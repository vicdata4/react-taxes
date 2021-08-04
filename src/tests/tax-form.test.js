import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TaxForm from '../components/TaxForm/TaxForm';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { expect } from 'chai';

const mockStore = configureStore([]);

describe('Form without inputFields', () => {
    let store;
    let component;

    beforeEach(() => {
        store = mockStore({
            taxes: { formInfo: { inputFields: [] } },
        });

        component = mount(
            <Provider store={store}>
                <Router>
                    <TaxForm />
                </Router>
            </Provider>
        );
    });

    it('Default length', () => {
        expect(component.find('input').length).equal(0);
    });

    it('Not displays message', () => {
        const dataProp = component.children().children().props().children.props.data;
        expect(dataProp).equal(undefined);
    });
});

describe('Form with inputFields', () => {
    let store;
    let component;
    const submission = {
        "email": "vicdata@outlook.com",
        "phone": "1111",
        "taxId": "2",
        "id": 1
    };

    const inputFields = [
        {
            "id": "name",
            "label": "Name",
            "placeholder": "Your first name",
            "type": "text",
            "maxLength": 20
        },
        {
            "id": "surname",
            "label": "Surname",
            "placeholder": "Your last name",
            "type": "text",
            "maxLength": 40
        },
        {
            "id": "age",
            "label": "Age",
            "placeholder": "Your age",
            "type": "number"
        }
    ];

    beforeEach(() => {
        store = mockStore({
            taxes: {
                formInfo: {
                    inputFields: inputFields
                }
            },
        });

        component = mount(
            <Provider store={store}>
                <Router>
                    <TaxForm {...{data: submission}} />
                </Router>
            </Provider>
        );
    });

    it('Default length', () => {
        expect(component.find('input').length).equal(3);
    });

    it('Display p message', () => {
        const dataProp = component.children().children().props().children.props.data;
        expect(dataProp).equal(submission);
    });
});
