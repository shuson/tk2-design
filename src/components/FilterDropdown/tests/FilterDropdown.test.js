import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

import FilterDropdown from '../index';

const FilterDropdown_SAMPLE_FILTERGROUPDATA = {
  "title": "Business Parameters",
  "groupData": [
    {
      "title": "Parameters",
      "data": [
        {
          "id": "alerts",
          "name": "Alerts"
        },
        {
          "id": "hits",
          "name": "Hits"
        },
        {
          "id": "true_hits",
          "name": "True Hits"
        },
        {
          "id": "false_hits",
          "name": "False Hits"
        },
        {
          "id": "undetermined",
          "name": "Undetermined"
        },
        {
          "id": "auto_closed",
          "name": "Auto-Closed Hits"
        }
      ]
    }
  ]
};
const FilterDropdown_USERFILTERSETTING = {
  "Parameters": {
    "alerts": true,
    "hits": true,
    "true_hits": true,
    "false_hits": true,
    "undetermined": true,
    "auto_closed": true
  }
};

test('FilterDropdown renders empty div when no required props are given', t => {
  const wrapper = shallow(<FilterDropdown />);
  t.is(wrapper.children().length, 0);
});

test('FilterDropdown renders content when required props are given', t => {
  const wrapper = shallow(<FilterDropdown
    filterGroupData={FilterDropdown_SAMPLE_FILTERGROUPDATA}
    userFilterSetting={FilterDropdown_USERFILTERSETTING}
    handleConfirm={() => {}}
  />);
  t.is(wrapper.children().length > 0, true);
});

test('FilterDropdown has correct state for checkboxes when rendered', t => {
  const wrapper = shallow(<FilterDropdown
    filterGroupData={FilterDropdown_SAMPLE_FILTERGROUPDATA}
    userFilterSetting={FilterDropdown_USERFILTERSETTING}
    handleConfirm={() => {}}
  />);
  const checkboxStates = {};
  const { groupData } = FilterDropdown_SAMPLE_FILTERGROUPDATA;
  groupData.forEach((group, i) => {
    checkboxStates[group.title] = checkboxStates[group.title] || {}
    group.data.forEach((filter) => {
      if(FilterDropdown_USERFILTERSETTING[group.title]) {
        checkboxStates[group.title][filter.id] = FilterDropdown_USERFILTERSETTING[group.title][filter.id]
      } else {
        checkboxStates[group.title][filter.id] = true
      }
    })
  })
  t.deepEqual(wrapper.state('checkboxStates'), checkboxStates);
});