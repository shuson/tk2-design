import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import CircularProgressBar from '../index';

const CircularProgressBar_SAMPLEPERCENTAGE = 30;
const CircularProgressBar_SAMPLESQSIZE = 50;
const CircularProgressBar_SAMPLESTROKEFILL = '#E85252';
const CircularProgressBar_SAMPLESTROKEWIDTH = 5;

test('CircularProgressBar returns null when no required props present', t => {
  const wrapper = shallow(<CircularProgressBar />);
  t.is(wrapper.type(), null);
});

test('CircularProgressBar returns content props are present', t => {
  const wrapper = shallow(<CircularProgressBar
    sqSize={CircularProgressBar_SAMPLESQSIZE}
    percentage={CircularProgressBar_SAMPLEPERCENTAGE}
    strokeWidth={CircularProgressBar_SAMPLESTROKEWIDTH}
    strokeFill={CircularProgressBar_SAMPLESTROKEFILL}
  />);
  t.not(wrapper.type(), null);
});