import React from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames'
import moment from 'moment';

import DatePicker from 'antd/lib/date-picker'

import style from './index.scss'

const { RangePicker } = DatePicker;

class RangedDtPicker extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
  }

  onDatesChange = (picker) => {
    this.props.onDatesChange(picker[0], picker[1], -1)
  }

  onDateRangeChange(rangeNo) {
    let {startDate, endDate} = this.props

    switch(rangeNo) {
      // case 0:
      //   startDate = moment().subtract(1, 'days')
      //   break;
      case 1:
        startDate = moment().subtract(1, 'weeks')
        break;
      case 2:
        startDate = moment().subtract(1, 'months')
        break;
      case 3:
        startDate = moment().subtract(3, 'months')
        break;
      case 4:
        startDate = moment().subtract(6, 'months')
        break;
      case 5:
        startDate = moment().subtract(1, 'years')
        break;
      default:
        break;
    }

    this.props.onDatesChange(startDate, moment(), rangeNo)
  }
  
  render() {
    const {activeRangeNo, startDate, endDate} = this.props

    if (!activeRangeNo || !startDate || !endDate) {
      return null;
    }

    return (
      <div className={style.wrapper}>
        {/* <span className={classnames(style.presetSpan, activeRangeNo == 0?style.presetSpanActive: '')}
            onClick={() => {this.onDateRangeChange(0)}}
          >
            1D</span> */}
          <span className={classnames(style.presetSpan, activeRangeNo == 1?style.presetSpanActive: '')}
            onClick={() => {this.onDateRangeChange(1)}} 
          >
            1W</span>
          <span className={classnames(style.presetSpan, activeRangeNo == 2?style.presetSpanActive: '')}
            onClick={() => {this.onDateRangeChange(2)}} 
          >
            1M</span>
          <span className={classnames(style.presetSpan, activeRangeNo == 3?style.presetSpanActive: '')}
            onClick={() => {this.onDateRangeChange(3)}} 
          >
            3M</span>
          <span className={classnames(style.presetSpan, activeRangeNo == 4?style.presetSpanActive: '')}
            onClick={() => {this.onDateRangeChange(4)}} 
          >
            6M</span>
          <span className={classnames(style.presetSpan, activeRangeNo == 5?style.presetSpanActive: '')}
            onClick={() => {this.onDateRangeChange(5)}} 
          >
            1Y</span>
          <RangePicker allowClear={false}
            value={[startDate, endDate]}
            onChange={this.onDatesChange}
            dateRender={(current) => {
              const style = {}
              style.borderRadius = '50%'

              if(current.isSame(startDate) || current.isSame(endDate)) {
                style.background = '#335577'
                style.color = 'white'
              }
              
              return (
                <div className="ant-calendar-date" style={style}>
                  {current.date()}
                </div>
              )
            }}
          />
      </div>
    );
  }
}

RangedDtPicker.propTypes = {
  startDate: PropTypes.object.isRequired,
  endDate: PropTypes.object.isRequired,
  activeRangeNo: PropTypes.number.isRequired,
  onDatesChange: PropTypes.func.isRequired
};

export default RangedDtPicker;
