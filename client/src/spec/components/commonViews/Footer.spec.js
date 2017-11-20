/* globals expect */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Footer from '../../../components/commonViews/Footer';
import mockData from '../../mocks/mockData';

describe('Given Footer component is mounted', () => {
  it('should render self without crashing', () => {
    const tree = shallow(<Footer />);
    const wrapper = shallow(<Footer />);
    expect(tree.exists()).toBe(true);
    expect(tree.find('footer').exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});