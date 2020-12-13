import React from 'react';
import { shallow } from 'enzyme';
import '../../jest.setup';
import Keyboard from "../keyboard/Keyboard";

describe('<Keyboard/>', () => {
    it('should show keyboard', () => {
        const props = {
            plusMr: () => {},
            minusMr: () => {},
            clearMr: () => {},
            setExpression: () => {},
            expression: ''
        }
        const wrappedComponent = shallow(<Keyboard {...props}/>)
        expect(wrappedComponent).toMatchSnapshot();
    })
})