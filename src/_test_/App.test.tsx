import React from 'react';
import { shallow } from 'enzyme';
import '../../jest.setup';
import App from "../app/App";

describe('<App/>', () => {
    it('should display Monitor', () => {
        const wrappedComponent = shallow(<App/>)
        expect(wrappedComponent.find('Monitor').exists()).toBeTruthy()
    })

    it('should display Keyboard', () => {
        const wrappedComponent = shallow(<App/>)
        expect(wrappedComponent.find('Keyboard').exists()).toBeTruthy()
    })
})
