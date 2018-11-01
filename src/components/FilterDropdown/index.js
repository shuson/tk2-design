import React from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Scrollbars } from 'react-custom-scrollbars';

import style from './index.scss'

import filterAppliedImg from '../../assets/filterApplied.png'

class FilterDropdown extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
    
    const {filterGroupData, userFilterSetting } = this.props

    const checkboxStates = {}
    if (filterGroupData && filterGroupData.groupData) {
      const { groupData } = filterGroupData;
      groupData.forEach((group, i) => {
        checkboxStates[group.title] = checkboxStates[group.title] || {}
        group.data.forEach((filter) => {
          if(userFilterSetting[group.title]) {
            checkboxStates[group.title][filter.id] = userFilterSetting[group.title][filter.id]
          } else {
            checkboxStates[group.title][filter.id] = true
          }
        })
      })
    }

    this.state = {
      isHidden: true,
      checkboxStates: Object.assign({}, checkboxStates)
    }

    this.onToggle = this.onToggle.bind(this)
    this.onCheckboxChange = this.onCheckboxChange.bind(this)
    this.onCancel = this.onCancel.bind(this)
    this.onConfirm = this.onConfirm.bind(this)
  }

  onToggle() {
    this.setState({
      ...this.state,
      isHidden: !this.state.isHidden
    })
  }

  onCheckboxChange(groupTitle, filterName) {
    const {checkboxStates } = this.state

    checkboxStates[groupTitle][filterName] = !checkboxStates[groupTitle][filterName]

    this.setState({
      ...this.state,
      checkboxStates
    })
  }

  onCancel() {
    this.setState({
      ...this.state,
      isHidden: true
    })
  }

  onConfirm() {
    const {handleConfirm } = this.props

    handleConfirm(this.state.checkboxStates);
  }

  componentWillReceiveProps(nextProps) {
    const {filterGroupData: {groupData}, userFilterSetting } = nextProps

    const checkboxStates = {}
    groupData.forEach((group, i) => {
      checkboxStates[group.title] = checkboxStates[group.title] || {}
      group.data.forEach((filter) => {
        if(userFilterSetting[group.title]) {
          checkboxStates[group.title][filter.id] = userFilterSetting[group.title][filter.id]
        } else {
          checkboxStates[group.title][filter.id] = true
        }
      })
    })

    this.setState({
      ...this.state,
      isHidden: true,
      checkboxStates
    })
  }

  render() {
    const {isHidden, checkboxStates } = this.state
    const {filterGroupData, userFilterSetting} = this.props
    
    if(!filterGroupData || !userFilterSetting) {
      return <div className={style.wrapper} />
    }

    return (
      <div className={style.wrapper}>
        <a className={style.filterTrigger} onClick={this.onToggle}>
          <span>{filterGroupData.title}</span>
          <img className={style.triggerIcon} src={filterAppliedImg} alt="checked" />
        </a>
        <div className={style.filterContent} style={{display: isHidden? "none" : "block"}}>
          <FilterList groupData={filterGroupData.groupData} checkboxStates={checkboxStates} onCheckboxChange={this.onCheckboxChange} />
          <div className={style.contentFooter}>
            <button className="btn btn-tertiary" type="button" onClick={this.onCancel}>Cancel</button>
            <button className="btn btn-secondary" type="button" onClick={this.onConfirm}>Set</button>
          </div>
        </div>
      </div>
    );
  }
}

FilterDropdown.propTypes = {
  filterGroupData: PropTypes.object.isRequired, 
  handleConfirm: PropTypes.func.isRequired,
  userFilterSetting: PropTypes.object,
};

class FilterList extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    const {groupData, checkboxStates, onCheckboxChange } = this.props

    let groupList = []
    const groupSize = groupData.length
    groupData.forEach((group, i) => {
      const groupTitle = group.title
      const groupTotalChecked = _sumCheckedbox(checkboxStates[groupTitle])

      let filterList = []
      group.data.forEach((filter, j) => {
        const inputId = Math.random().toString(36).substring(7);
        filterList.push(
          <li key={filter.id + j}>
            <div className="custom-checkbox">
              <input type="checkbox" name={filter.id} id={inputId} 
                className="css-checkbox" checked={!!checkboxStates[groupTitle][filter.id]} 
                onChange={(e) => {onCheckboxChange(group.title, filter.id)}}
                defaultChecked={true}
              />
              <label htmlFor={inputId} className="css-label">{filter.name}</label>
            </div>
          </li>
        )
      })

      groupList.push(
        <div className={style.filterList} key={group.title + i} style={groupSize == 1? {width: 465 } : {}}>
          <p>{groupTitle} {`(${groupTotalChecked})`}</p>
          <Scrollbars>
            <ul className="list-unstyled">
              {filterList}
            </ul>
          </Scrollbars>
        </div>
      )
    })

    return (
      <div className={style.contentBody}>
        {groupList}      
      </div>
    )
  }
}

FilterList.propTypes = {
  groupData: PropTypes.array.isRequired,
  checkboxStates: PropTypes.object.isRequired,
  onCheckboxChange: PropTypes.func.isRequired
}

const _sumCheckedbox = (checkboxes) => {
  let i = 0
  for(const key in checkboxes) {
    if(checkboxes[key]) i += 1
  }

  return i
}

export default FilterDropdown;
