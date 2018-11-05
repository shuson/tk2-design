import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';

const UniTable_SAMPLE_COLUMNS = [
  {
    "id": "name",
    "name": "Name"
  },
  {
    "id": "age",
    "name": "Age (yrs)"
  },
  {
    "id": "gender",
    "name": "Gender"
  },
  {
    "id": "occupation",
    "name": "Occupation"
  },
  {
    "id": "culture",
    "name": "Culture"
  },
  {
    "id": "top_3_wc_matches",
    "name": "Top 3 WC Matches"
  },
  {
    "id": "biz_segment",
    "name": "Business Segment"
  },
  {
    "id": "indicator",
    "name": [
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
        "name": "Auto Closed"
      },
      {
        "id": "hits_yield",
        "name": "Hits Yield"
      }
    ]
  },
  {
    "id": "average_hit_by_alert",
    "name": "Average Hits\/Alerts"
  },
  {
    "id": "customer_id",
    "name": "Customer ID"
  }
];
const UniTable_SAMPLE_DATA = [
  {
    "id": "cstm0000001",
    "customer_id": "cstm0000001",
    "name": "LI JUN",
    "age": 31,
    "gender": "Male",
    "occupation": "Media",
    "culture": "Chinese",
    "top_3_wc_matches": [
      "Li JUN",
      "LI JUN",
      "Li JUN"
    ],
    "biz_segment": "Corp Bank Singapore",
    "alerts": 209,
    "hits": 4374,
    "true_hits": 31,
    "false_hits": 189,
    "undetermined": 32,
    "auto_closed": 3935,
    "hits_yield": 0.02,
    "average_hit_by_alert": 8.1
  },
  {
    "id": "cstm0000002",
    "customer_id": "cstm0000002",
    "name": "ISLAM SAIFUL",
    "age": 21,
    "gender": "Female",
    "occupation": "Businessman",
    "culture": "Malay",
    "top_3_wc_matches": [
      "ISLAM SAIFUL",
      "ISLAM SAIFUL",
      "ISLAM SAIFUL"
    ],
    "biz_segment": "Private Bank Singapore",
    "alerts": 218,
    "hits": 2448,
    "true_hits": 29,
    "false_hits": 199,
    "undetermined": 32,
    "auto_closed": 2112,
    "hits_yield": 0.02,
    "average_hit_by_alert": 6.1
  },
  {
    "id": "cstm0000001",
    "customer_id": "cstm0000001",
    "name": "WEI WANG SHU",
    "age": 31,
    "gender": "Male",
    "occupation": "Media",
    "culture": "Chinese",
    "top_3_wc_matches": [
      "WEI WANG SHU",
      "WEI WANG SHU",
      "WEI WANG SHU"
    ],
    "biz_segment": "Corp Bank Singapore",
    "alerts": 176,
    "hits": 2375,
    "true_hits": 49,
    "false_hits": 389,
    "undetermined": 52,
    "auto_closed": 1873,
    "hits_yield": 0.02,
    "average_hit_by_alert": 8.1
  },
  {
    "id": "cstm0000002",
    "customer_id": "cstm0000002",
    "name": "LI WEI",
    "age": 21,
    "gender": "Female",
    "occupation": "Businessman",
    "culture": "Chinese",
    "top_3_wc_matches": [
      "LI WEI",
      "LI WEI",
      "LI WEI"
    ],
    "biz_segment": "Private Bank Singapore",
    "alerts": 174,
    "hits": 2314,
    "true_hits": 29,
    "false_hits": 119,
    "undetermined": 32,
    "auto_closed": 2149,
    "hits_yield": 0.02,
    "average_hit_by_alert": 6.1
  },
  {
    "id": "cstm0000013",
    "customer_id": "cstm0000003",
    "name": "Wang Tao",
    "age": 21,
    "gender": "Female",
    "occupation": "Sales",
    "culture": "Chinese",
    "top_3_wc_matches": [
      "Ang Tao",
      "Ang Tao",
      "Ang Tao"
    ],
    "biz_segment": "PFS-Mass",
    "alerts": 138,
    "hits": 1753,
    "true_hits": 29,
    "false_hits": 119,
    "undetermined": 32,
    "auto_closed": 1596,
    "hits_yield": 0.02,
    "average_hit_by_alert": 6.1
  },
  {
    "id": "cstm0000023",
    "customer_id": "cstm0000003",
    "name": "Wang Jia",
    "age": 21,
    "gender": "Female",
    "occupation": "Sales",
    "culture": "Chinese",
    "top_3_wc_matches": [
      "Wang Tao",
      "Wang Tao",
      "Wong Tao"
    ],
    "biz_segment": "PFS-Mass",
    "alerts": 138,
    "hits": 1753,
    "true_hits": 29,
    "false_hits": 119,
    "undetermined": 32,
    "auto_closed": 1596,
    "hits_yield": 0.02,
    "average_hit_by_alert": 6.1
  },
  {
    "id": "cstm0000103",
    "customer_id": "cstm0000203",
    "name": "Jia Tao",
    "age": 21,
    "gender": "Female",
    "occupation": "Sales",
    "culture": "Chinese",
    "top_3_wc_matches": [
      "Ia Tao",
      "Ia Tao",
      "Ia Tao"
    ],
    "biz_segment": "PFS-Mass",
    "alerts": 138,
    "hits": 1753,
    "true_hits": 29,
    "false_hits": 119,
    "undetermined": 32,
    "auto_closed": 1596,
    "hits_yield": 0.02,
    "average_hit_by_alert": 6.1
  }
];
const UniTable_SAMPLE_TABLEFILTER = {
  "Parameters": {
    "alerts": true,
    "hits": true,
    "true_hits": true,
    "false_hits": true,
    "undetermined": true,
    "auto_closed": true
  }
};

test('AssocTransaction page container', (t) => {
  t.pass();
});