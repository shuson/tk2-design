import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import FigureItem from '../index';
import { Popover } from 'reactstrap';

const FigureItem_SAMPLE_FIGURE = {
  "id": "hits_yield",
  "name": "Hits Yield",
  "value": "14%",
  "previous_value": "10%"
};
const FigureItem_SAMPLE_TIPS = {
  id: "tip_5",
  value: "The total number of alerts past their investigation deadline."
};

test('FigureItem returns loading text when no appropriate data', t => {
  const wrapper = shallow(<FigureItem />);
  t.regex(wrapper.render().text(), /Loading.../);
});

test('FigureItem returns whole result when given complete data', t => {
  const wrapper = shallow(<FigureItem
    tips={FigureItem_SAMPLE_TIPS}
    figure={FigureItem_SAMPLE_FIGURE}
  />);
  t.notRegex(wrapper.render().text(), /Loading.../);
});

test('FigureItem renders tip when tip data is passed', t => {
  const wrapper = shallow(<FigureItem
    tips={FigureItem_SAMPLE_TIPS}
    figure={FigureItem_SAMPLE_FIGURE}
  />);
  t.is(wrapper.exists(Popover), true);
});

test('FigureItem renders right caret when current value is higher', t => {
  const wrapper = shallow(<FigureItem
    tips={FigureItem_SAMPLE_TIPS}
    figure={FigureItem_SAMPLE_FIGURE}
  />);
  t.is(wrapper.exists('.fa-caret-up'), true);
});

test('FigureItem renders right caret when current value is lower', t => {
  let sample_figure_data_value_lower = {
    ...FigureItem_SAMPLE_FIGURE
  };
  sample_figure_data_value_lower.value = '9%';
  const wrapper = shallow(<FigureItem
    tips={FigureItem_SAMPLE_TIPS}
    figure={sample_figure_data_value_lower}
  />);
  t.is(wrapper.exists('.fa-caret-down'), true);
});