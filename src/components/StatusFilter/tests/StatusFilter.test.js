import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import { StatusFilter } from '../index';

const StatusFilter_SAMPLE_STATUSDATA = [
  {
    "name": "all",
    "text": "All"
  },
  {
    "name": "open",
    "text": "Open"
  },
  {
    "name": "under_investigation",
    "text": "Under Investigation"
  },
  {
    "name": "closed",
    "text": "Closed"
  }
];
const StatusFilter_SAMPLE_FILTERDATA = {
  "all": 4,
  "open": 2,
  "under_investigation": 1,
  "closed": 1
};
const StatusFilter_SAMPLE_ACTIVEINDEX = 0;

test('StatusFilter renders null when required props are not passed', t => {
  const wrapper = shallow(<StatusFilter />);
  t.is(wrapper.type(), null);
});

test('StatusFilter renders content when required props are passed', t => {
  const wrapper = shallow(<StatusFilter />);
  wrapper.setProps({
    statusData: StatusFilter_SAMPLE_STATUSDATA,
    filterData: StatusFilter_SAMPLE_FILTERDATA,
    activeIndex: StatusFilter_SAMPLE_ACTIVEINDEX
  });
  t.not(wrapper.type(), null);
});

test('StatusFilter renders correct amount of <span /> based on statusData', t => {
  const wrapper = shallow(<StatusFilter />);
  wrapper.setProps({
    statusData: StatusFilter_SAMPLE_STATUSDATA,
    filterData: StatusFilter_SAMPLE_FILTERDATA,
    activeIndex: StatusFilter_SAMPLE_ACTIVEINDEX
  });
  t.is(wrapper.find('span').length, StatusFilter_SAMPLE_STATUSDATA.length);
});