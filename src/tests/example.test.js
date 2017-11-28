import React from 'react';
import TestComponent from '../components/testcomponent';
import { shallow } from 'enzyme';

test('should assert title for testcomponent', () => {
    const wrapper = shallow(<TestComponent />)
    expect(wrapper.find('h1').text()).toBe('Hello')
})