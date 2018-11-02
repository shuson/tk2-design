import React, { Component } from 'react'
import moment from 'moment'

import {Wait4Me, FigureItem, RangedDtPicker, StatusFilter } from 'tk2-design'

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

    const {dateRange: {startDate, endDate, activeRangeNo}, activeStatusNo } = this.state

    const figure = {value: 123, previous_value: 112, name: "example"}
    const tips = "tips example"

    return (
      <div>
        <Wait4Me />
        <div style={{margin: '10px'}}>
          <StatusFilter filterData={statusFilterData} statusData={statusData}
              activeIndex={activeStatusNo} handleClick={this.onStatusFilterChange} />
        </div>

        <ul style={{ background: '#335577' }} className={'list-inline clearfix'}>
          <FigureItem figure={figure} tips={tips} />
          <FigureItem figure={figure} tips={tips} />
          <FigureItem figure={figure} tips={tips} />
        </ul>
        
        <div style={{margin: '10px'}}>
          <RangedDtPicker startDate={startDate} endDate={endDate} activeRangeNo={activeRangeNo} onDatesChange={this.onDatesChange} />
        </div>
      </div>
    )
  }
}
