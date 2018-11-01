import React from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames'

import style from './index.scss'

const StatusFilter = (props) => {
  const {statusData, filterData, activeIndex, handleClick} = props

  if (!statusData || !filterData || activeIndex === null || activeIndex === undefined) {
    return null;
  }

  let spanElements = []
  statusData.forEach((status, i) => {
    spanElements.push(<span key={`${status.text}-${i}`} 
      className={classnames(style.presetSpan, activeIndex == i? style.presetSpanActive: '')}
      onClick={() => {handleClick(i)}}
    >{status.text}
    <small> ({filterData[status.name]})</small></span>)
  })

  return <div className={style.statusFilter}>
    {spanElements}
  </div>
}

StatusFilter.propTypes = {
  statusData: PropTypes.array,
  filterData: PropTypes.object.isRequired,
  activeIndex: PropTypes.number,
  handleClick: PropTypes.func
}

const SubstatusFilter = (props) => {
  const {statusData, filterData, activeIndex, handleClick} = props

  if (!statusData || !filterData || activeIndex === null || activeIndex === undefined) {
    return null;
  }

  let spanElements = []
  statusData.forEach((status, i) => {
    spanElements.push(<span key={`${status.text}-${i}`} 
      className={classnames(style.presetSpanSubstatus, activeIndex == i?style.presetSpanSubstatusActive: '')}
      onClick={() => {handleClick(i)}}
    >{status.text}
    <small> ({filterData[status.name]})</small></span>)
  })

  return <div className={style.statusFilter}>
    {spanElements}
  </div>
}

SubstatusFilter.propTypes = {
  statusData: PropTypes.array,
  filterData: PropTypes.object.isRequired,
  activeIndex: PropTypes.number,
  handleClick: PropTypes.func
}

export {StatusFilter, SubstatusFilter};
