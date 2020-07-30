import React from 'react';
import ReactShallowerRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';
import {shallow} from 'enzyme';


test('should render header correctly', () => {
    const wrapper = shallow(<Header/>)
    expect(wrapper).toMatchSnapshot()
})