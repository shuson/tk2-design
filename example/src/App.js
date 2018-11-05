import React, { Component } from 'react';
import moment from 'moment';

import {
  Wait4Me,
  FigureItem,
  RangedDtPicker,
  StatusFilter,
  UniTable,
  FilterDropdown
} from 'tk2-design';

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
      }
    ];
    const UniTable_SAMPLE_TABLEFILTER = {
      "Parameters": {
        "alerts": true,
      }
    };

    // FilterDropdown props
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

    // RangedDtPicker state: dateRange: {startDate, endDate, activeRangeNo}
    // StatusFilter state: activeStatusNo

    const {dateRange: {startDate, endDate, activeRangeNo}, activeStatusNo } = this.state

    return (
      <div>
        <div style={{ marginBottom: '30px' }} className="row col-sm-12">
          <h4>Wait4Me Component</h4>
        </div>

        <Wait4Me />

        <div style={{ marginBottom: '30px' }} className="row col-sm-12">
          <h4>StatusFilter Component</h4>
        </div>

        <div style={{marginBottom: '10px'}}>
          <StatusFilter filterData={statusFilterData} statusData={statusData}
              activeIndex={activeStatusNo} handleClick={this.onStatusFilterChange} />
        </div>

        <div style={{ marginBottom: '30px' }} className="row col-sm-12">
          <h4>FigureItem Component</h4>
        </div>

        <ul style={{ background: '#335577' }} className={'list-inline clearfix'}>
          <FigureItem figure={figure} tips={tips} />
          <FigureItem figure={figure} tips={tips} />
          <FigureItem figure={figure} tips={tips} />
        </ul>

        <div style={{ marginBottom: '30px' }} className="row col-sm-12">
          <h4>RangedDtPicker Component</h4>
        </div>
        
        <div style={{marginBottom: '10px'}}>
          <RangedDtPicker startDate={startDate} endDate={endDate} activeRangeNo={activeRangeNo} onDatesChange={this.onDatesChange} />
        </div>

        <div style={{ marginBottom: '30px' }} className="row col-sm-12">
          <h4>FilterDropdown Component</h4>
        </div>
        
        <div style={{marginBottom: '10px'}}>
          <div className="row">
            <div className="offset-sm-8 col-sm-4">
              <FilterDropdown
                filterGroupData={FilterDropdown_SAMPLE_FILTERGROUPDATA}
                userFilterSetting={FilterDropdown_USERFILTERSETTING}
                handleConfirm={() => {}}
              />
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '30px' }} className="row col-sm-12">
          <h4>UniTable Component</h4>
        </div>

        <div style={{ marginBottom: '30px' }}>
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
