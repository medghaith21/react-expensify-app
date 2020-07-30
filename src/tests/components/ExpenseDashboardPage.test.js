import React from 'react';
import ReactShallowerRenderer from 'react-test-renderer/shallow';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';
import {shallow} from 'enzyme';


test('should render ExpenseDashboardPage correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />)
    expect(wrapper).toMatchSnapshot()
})