import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';

const ItemList = ({ items=[] }) => (
  <ul>
    {items.map((item, index) => (
      <Item key={index} {...item} />
    ))}
  </ul>
)

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      point: PropTypes.number.isRequired
    })
  ).isRequired
}

export default ItemList;
