import React from 'react';
import List from './List';

export default class FilteredList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: [
        "Apples",
        "Broccoli",
        "Chicken",
        "Duck",
        "Eggs",
        "Fish",
        "Granola",
        "Hash Browns"
      ],
      items: []
    };
  }

  filterList = e => {
    const { initialItems } = this.state;
    const { onFilter } = this.props;

    // Filter items according to SearchBar input
    const updatedList = initialItems.filter(item  => {
      return item.toLowerCase().search(
        e.target.value.toLowerCase()) !== -1;
    });

    this.setState({items: updatedList});

    if (onFilter) {
      onFilter(updatedList);
    }
  }

  render() {
    const { items, initialItems } = this.state;
    return (
      <div className="filter-list">
          <fieldset className="form-group">
          <input type="text" className="form-control form-control-md" placeholder="Search" onChange={this.filterList}/>
          </fieldset>
          <List items={items.length > 0 ? items : initialItems}/>
      </div>
    );
  }
}