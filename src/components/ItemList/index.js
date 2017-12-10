import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Item from '../Item';

const BrankUL = styled.ul`
  list-style-type: none;
`

const ItemList = ({ items=[], onItemClick }) => (
  <BrankUL>
    {items.map((item, index) => (
      <Item key={index} {...item} onClick={() => onItemClick(index)} />
    ))}
  </BrankUL>
)

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      point: PropTypes.number.isRequired
    })
  ).isRequired,
  onItemClick: PropTypes.func.isRequired,
}

export default ItemList;
