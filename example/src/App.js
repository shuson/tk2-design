import React, { Component } from 'react'
import moment from 'moment'

import {Wait4Me, FigureItem, RangedDtPicker, StatusFilter, UniTable } from 'tk2-design'

export default class App extends Component {
  state = {
    dateRange: {
      startDate: moment().subtract(1, 'months'),
      endDate: moment(),
      activeRangeNo: 2
    },
    activeStatusNo: 0,

  }

  onDatesChange = (start, end, rangeNo) => {
    const newDateRange = {
      startDate: start, 
      endDate: end,
      activeRangeNo: rangeNo
    }

    this.setState({
      ...this.state,
      dateRange: newDateRange
    })
  }

  onStatusFilterChange = (index) => {
    this.setState({
      ...this.state,
      activeStatusNo: index
    })
  }

  render () {
    // StatusFilter props
    const statusFilterData = {
      "all": 4,
      "open": 2,
      "under_investigation": 1,
      "closed": 1
    }
    const statusData = [
      {
        name: "all",
        text: "All"
      },
      {
        name: "open",
        text: "Open"
      },
      {
        name: "under_investigation",
        text: "Under Investigation"
      },
      {
        name: "closed",
        text: "Closed"
      }
    ]
    
    // FigureItem props
    const figure = {value: 123, previous_value: 112, name: "example"}
    const tips = "tips example"

    // UniTable props
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

    // RangedDtPicker state: dateRange: {startDate, endDate, activeRangeNo}
    // StatusFilter state: activeStatusNo

    const {dateRange: {startDate, endDate, activeRangeNo}, activeStatusNo } = this.state

    return (
      <div>
        <div style={{ margin: '30px' }} className="row col-sm-12">
          <h4>Wait4Me Component</h4>
        </div>

        <Wait4Me />

        <div style={{ margin: '30px' }} className="row col-sm-12">
          <h4>StatusFilter Component</h4>
        </div>

        <div style={{margin: '10px'}}>
          <StatusFilter filterData={statusFilterData} statusData={statusData}
              activeIndex={activeStatusNo} handleClick={this.onStatusFilterChange} />
        </div>

        <div style={{ margin: '30px' }} className="row col-sm-12">
          <h4>FigureItem Component</h4>
        </div>

        <ul style={{ background: '#335577' }} className={'list-inline clearfix'}>
          <FigureItem figure={figure} tips={tips} />
          <FigureItem figure={figure} tips={tips} />
          <FigureItem figure={figure} tips={tips} />
        </ul>

        <div style={{ margin: '30px' }} className="row col-sm-12">
          <h4>RangedDtPicker Component</h4>
        </div>
        
        <div style={{margin: '10px'}}>
          <RangedDtPicker startDate={startDate} endDate={endDate} activeRangeNo={activeRangeNo} onDatesChange={this.onDatesChange} />
        </div>

        <div style={{ margin: '30px' }} className="row col-sm-12">
          <h4>UniTable Component</h4>
        </div>

        <div style={{ margin: '10px' }}>
          <UniTable
            name="Individual"
            filterKey="Parameters"
            columns={UniTable_SAMPLE_COLUMNS}
            data={UniTable_SAMPLE_DATA}
            tableFilter={UniTable_SAMPLE_TABLEFILTER}
          />
        </div>
      </div>
    )
  }
}
