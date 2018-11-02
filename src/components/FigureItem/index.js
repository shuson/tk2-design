import React from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Tooltip from 'antd/lib/tooltip'

import {formatNumeric } from '../../util'

import style from './index.scss'

class FigureItem extends React.Component {
  constructor(props) {
    super(props)
  }


  render () {
    const {tips} = this.props
    const {value, previous_value, name} = this.props.figure || {}

    if(!value || !name) {
      return <div>Loading...</div>
    }

    let hint = null;
    if (tips) {
      hint = <span className={style.hint}>
        <Tooltip title={tips}>
          <i className="fa fa-exclamation-triangle fa-0.5x" style={{fontSize: '12px'}}></i>
        </Tooltip>
      </span>
    }

    return (
      <li className={style.figureLi}>
        <span style={{display: "inline-block"}}>{name}</span>
        {hint}
        <span style={{fontSize: '1.5rem', color: '#fff'}}>
          {formatNumeric(value)}
          <small>
            <i
              style={{ color: value > previous_value ? '#4caf50' : '#e85252' }}
              className={classnames('fa', value > previous_value ? 'fa-caret-up' : 'fa-caret-down')}></i>
          </small>
        </span>
        <span>
          {previous_value}
        </span>
      </li>
    );
  }
}

FigureItem.propTypes = {
  figure: PropTypes.object.isRequired,
  tips: PropTypes.string
};

export default FigureItem;
