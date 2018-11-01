import React from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Scrollbars } from 'react-custom-scrollbars'

import style from './index.scss'

import { nsColorFinder } from '../../util';
import isArray from 'lodash/isArray'

import filterImg from "../../assets/filter.png"
import filterAppliedImg from "../../assets/filterApplied.png"
import moment from 'moment'

class UniTable extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props)

    this.state={
      tableWidth: "100%",
      prevLeft: -1,
      prevTop: -1,
      toLeft: 0
    }
  }
  
  propTypes = {
    name: PropTypes.string.isRequired,
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    tableFilter: PropTypes.object
  };

  updateTableWidth = () => {
    const {name} = this.props
    const elem = document.getElementById(name);
    const computedStyle = window.getComputedStyle(elem, null);
    const newWidth = computedStyle.getPropertyValue("width");

    this.setState({
      tableWidth: parseInt(newWidth)
    })
  }

  componentDidMount() {
    this.updateTableWidth();
    window.addEventListener("resize", this.updateTableWidth);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateTableWidth);
  }

  handleScroll = (e) => {
    const {prevLeft, prevTop} = this.state;

    if(prevTop == e.top) {
      this.setState({
        prevLeft: e.left,
        prevTop: e.top,
        toLeft: e.scrollLeft
      })
    } else {
      this.setState({
        prevLeft: e.left,
        prevTop: e.top,
      })
    }
  }

  render() {
    const {tableWidth, toLeft } = this.state
    const {name, columns, data, tableFilter, filterKey} = this.props

    let tableHeader = []
    columns.forEach((col, i) => {
      if(col.id == "indicator") {
        const names = col.name
        names.forEach((ind, j) => {
          const color = nsColorFinder(ind.id)

          if(!tableFilter[filterKey] || tableFilter[filterKey][ind.id]) {
            tableHeader.push(<th key={`th-${i}-${j}`} className={style.withIndicator}> 
              <i className={classnames(style.dotIndicator)} style={{background: color}}></i>
              {ind.name}
            </th>)
          }
        })
      } else {
        tableHeader.push(<th key={`th-${i}`} 
          style={{minWidth: col.id == "top_3_wc_matches"? 126 : 87, maxWidth: col.id == "top_3_wc_matches"? 126 : 87}}>
          {col.name}
        </th>)
      }
    })

    let tableContent = []
    data.forEach((customer, i) => {
      let tds = []
      columns.forEach((col, j) => {
        if(col.id == "indicator") {
          const names = col.name
          names.forEach((ind, k) => {
            if(!tableFilter[filterKey] || tableFilter[filterKey][ind.id]) {
              tds.push(<td className={style.withIndicator} key={`row-${i}-cell-${j}-sub${k}`}>
                {customer[ind.id]}
              </td>)
            }
          })
        } else {
          tds.push(<td key={`row-${i}-cell-${j}`} 
            style={{minWidth: col.id == "top_3_wc_matches"? 126 : 87, maxWidth: col.id == "top_3_wc_matches"? 126 : 87}}>
            {isArray(customer[col.id]) ? 
              customer[col.id].map((name, mi) => <React.Fragment key={`r-fragment-${mi}`}>{name}<br/></React.Fragment>) : customer[col.id]}
          </td>)
        }
      })

      tableContent.push(<tr key={`row-${i}`}>{tds}</tr>)
    })

    return (
      <div className={style.wrapper}>
        <div className={classnames("row m-0", style.pdlr0)}>
          <table className={classnames("table-striped")} id={name}
            style={{width: tableWidth+"px"}}>
            <thead style={{width: tableWidth+"px", left: -toLeft + "px"}}>
              <tr className="clearfix">
                {tableHeader}
              </tr>
            </thead>
            <Scrollbars style={{ height: "300px",maxHeight:'300px' }} onScrollFrame={this.handleScroll}>
              <tbody>
                {tableContent}
              </tbody>
            </Scrollbars>
          </table>
        </div>
        
      </div>
    );
  }
}

export default UniTable;
