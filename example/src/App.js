import React, { Component } from 'react'
import moment from 'moment'

import {Wait4Me, FigureItem, RangedDtPicker } from 'tk2-design'

export default class App extends Component {
  state = {
    dateRange: {
      startDate: moment().subtract(1, 'months'),
      endDate: moment(),
      activeRangeNo: 2
    }
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

  render () {
    const {dateRange: {startDate, endDate, activeRangeNo} } = this.state

    const figure = {value: 123, previous_value: 112, name: "example"}
    const tips = "tips example"

    return (
      <div>
        <Wait4Me />

        <ul style={{ background: '#335577' }} className={'list-inline clearfix'}>
          <FigureItem figure={figure} tips={tips} />
          <FigureItem figure={figure} tips={tips} />
          <FigureItem figure={figure} tips={tips} />
        </ul>
        
        <div>
          <RangedDtPicker startDate={startDate} endDate={endDate} activeRangeNo={activeRangeNo} onDatesChange={this.onDatesChange} />
        </div>
      </div>
    )
  }
}
