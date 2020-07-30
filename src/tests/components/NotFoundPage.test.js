import React from 'react';
import ReactShallowerRenderer from 'react-test-renderer/shallow';
import NotFoundPage from '../../components/NotFoundPage';
import {shallow} from 'enzyme';


test('should render NotFoundPAge correctly', () => {
    const wrapper = shallow(<NotFoundPage/>)
    expect(wrapper).toMatchSnapshot()
})