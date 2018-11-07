import React from 'react';

const List = ({ items }) => {
  if (items && Array.isArray(items) && items.length > 0) {
    return (
      <ul className="list-group">
        {
          items.map(function(item) {
              return <li className="list-group-item" data-category={item} key={item}>{item}</li>
          })
        }
      </ul>
    );
  }

  return null;
}

export default List;