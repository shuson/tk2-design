import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import RangedDtPicker from '../index';

const RangedDtPicker_SAMPLE_STARTDATE = moment().subtract(1, 'months');
const RangedDtPicker_SAMPLE_ENDDATE = moment();
const RangedDtPicker_SAMPLE_ACTIVERANGENO = 2;

test('RangedDtPicker renders null when no required props are passed', t => {
  const wrapper = shallow(<RangedDtPicker />);
  t.is(wrapper.type(), null);
});

test('RangedDtPicker renders content when required props are passed', t => {
  const wrapper = shallow(<RangedDtPicker
    startDate={RangedDtPicker_SAMPLE_STARTDATE}
    endDate={RangedDtPicker_SAMPLE_ENDDATE}
    activeRangeNo={RangedDtPicker_SAMPLE_ACTIVERANGENO}
  />);
  t.not(wrapper.type(), null);
});