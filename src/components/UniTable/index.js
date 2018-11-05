import React from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Scrollbars } from 'react-custom-scrollbars'

import style from './index.scss'
import isArray from 'lodash/isArray'
import find from 'lodash/find';
import remove from 'lodash/remove';
import cloneDeep from 'lodash/cloneDeep';
import orderBy from 'lodash/orderBy';

class UniTable extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props)

    this.state={
      tableWidth: "100%",
      prevLeft: -1,
      prevTop: -1,
      toLeft: 0,
      sortedColumns: [],
    }
  }
  
  propTypes = {
    name: PropTypes.string.isRequired,
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    tableFilter: PropTypes.object
  };

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

  toggleColumnSort = column => {
    // fetch column setting
    const { sortedColumns } = this.state;
    const workingColumn = find(sortedColumns, o => {
      return o.name === column;
    });

    if (workingColumn) {
      // strip away workingColumn from the original list
      let updatedSortedColumns = remove(sortedColumns, o => {
        return o.name !== workingColumn.name;
      });

      // return 'desc' order if current order is 'asc'
      if (workingColumn.order === 'asc') {
        let updatedWorkingColumn = {
          name: column,
          order: 'desc',
        };

        // push to state
        updatedSortedColumns.push(updatedWorkingColumn);
        this.setState({
          ...this.state,
          sortedColumns: updatedSortedColumns
        });

        return;
      }

      // else, remove column from list
      this.setState({
        ...this.state,
        sortedColumns: updatedSortedColumns
      });

      return;
    }

    // if the column is not yet sorting, set order to 'asc'
    let updatedWorkingColumn = {
      name: column,
      order: 'asc',
    };

    // push to state
    let updatedSortedColumns = cloneDeep(sortedColumns);
    updatedSortedColumns.push(updatedWorkingColumn);
    this.setState({
      ...this.state,
      sortedColumns: updatedSortedColumns
    });

    return;
  }

  renderSortCaret = column => {
    const { sortedColumns } = this.state;
    const workingColumn = find(sortedColumns, o => {
      return o.name === column;
    });

    if (workingColumn) {
      if (workingColumn.order === 'asc') {
        return (
          <button onClick={() => this.toggleColumnSort(column)}>
            <i className="fa fa-sort-up"></i>
          </button>
        );
      }

      return (
        <button onClick={() => this.toggleColumnSort(column)}>
          <i className="fa fa-sort-down"></i>
        </button>
      );
    }

    return (
      <button onClick={() => this.toggleColumnSort(column)}>
        <i className="fa fa-sort"></i>
      </button>
    );
  }

  render() {
    const {sortedColumns } = this.state
    const {name, columns, data, tableFilter, filterKey} = this.props

    let tableHeader = []
    columns.forEach((col, i) => {
      if(col.id == "indicator") {
        const names = col.name
        names.forEach((ind, j) => {

          if(!tableFilter[filterKey] || tableFilter[filterKey][ind.id]) {
            tableHeader.push(<th key={`th-${i}-${j}`}> 
              <span>{ind.name}</span>
              { this.renderSortCaret(col.id) }
            </th>)
          }
        })
      } else {
        tableHeader.push(<th key={`th-${i}`}>
          <span>{col.name}</span>
          { this.renderSortCaret(col.id) }
        </th>)
      }
    })

    let sortedData = data;
    if (sortedColumns.length > 0) {
      let columns = [];
      let orders = [];
      sortedColumns.map(column => {
        columns.push(column.name);
        orders.push(column.order);
      });

      sortedData =  orderBy(data, columns, orders);
    }

    let tableContent = []
    sortedData.forEach((customer, i) => {
      let tds = []
      columns.forEach((col, j) => {
        if(col.id == "indicator") {
          const names = col.name
          names.forEach((ind, k) => {
            if(!tableFilter[filterKey] || tableFilter[filterKey][ind.id]) {
              tds.push(<td key={`row-${i}-cell-${j}-sub${k}`}>
                {customer[ind.id]}
              </td>)
            }
          })
        } else {
          tds.push(<td key={`row-${i}-cell-${j}`}>
            {isArray(customer[col.id]) ? 
              customer[col.id].map((name, mi) => 
                <React.Fragment key={`r-fragment-${mi}`}>
                  {name}<br/>
                </React.Fragment>) :
                customer[col.id]}
          </td>);
        }
      })

      tableContent.push(<tr key={`row-${i}`}>{tds}</tr>)
    })

    return (
      <div className={style.wrapper}>
        <table className={classnames("table-striped")} id={name}>
          <thead>
            <tr>
              {tableHeader}
            </tr>
          </thead>
          <tbody>
            {tableContent}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UniTable;
