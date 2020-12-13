import React from 'react';
import Monitor from '../monitor/Monitor';
import { shallow } from 'enzyme';
import '../../jest.setup';

describe('<Monitor/>', () => {
    it('should show expression', () => {
        const props = {
            expression: '12'
        }
        const wrappedComponent = shallow(<Monitor {...props}/>)
        let result = wrappedComponent.find('.monitor-expression')
        expect(result.text()).toBe('12')
    })

    it('show expression when divided by zero', () => {
        const props = {
            expression: 'Infinity'
        }
        const wrappedComponent = shallow(<Monitor {...props}/>)
        let result = wrappedComponent.find('.monitor-expression')
        expect(result.text()).toBe('на ноль делить нельзя')
    })
})