import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import { SubstatusFilter } from '../index';

const SubstatusFilter_SAMPLE_STATUSDATA = [
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
const SubstatusFilter_SAMPLE_FILTERDATA = {
  "all": 4,
  "open": 2,
  "under_investigation": 1,
  "closed": 1
};
const SubstatusFilter_SAMPLE_ACTIVEINDEX = 0;

test('SubstatusFilter renders null when required props are not passed', t => {
  const wrapper = shallow(<SubstatusFilter />);
  t.is(wrapper.type(), null);
});

test('SubstatusFilter renders content when required props are passed', t => {
  const wrapper = shallow(<SubstatusFilter />);
  wrapper.setProps({
    statusData: SubstatusFilter_SAMPLE_STATUSDATA,
    filterData: SubstatusFilter_SAMPLE_FILTERDATA,
    activeIndex: SubstatusFilter_SAMPLE_ACTIVEINDEX
  });
  t.not(wrapper.type(), null);
});

test('SubstatusFilter renders correct amount of <span /> based on statusData', t => {
  const wrapper = shallow(<SubstatusFilter />);
  wrapper.setProps({
    statusData: SubstatusFilter_SAMPLE_STATUSDATA,
    filterData: SubstatusFilter_SAMPLE_FILTERDATA,
    activeIndex: SubstatusFilter_SAMPLE_ACTIVEINDEX
  });
  t.is(wrapper.find('span').length, SubstatusFilter_SAMPLE_STATUSDATA.length);
});