import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Item from '../Item';

const BrankUL = styled.ul`
  list-style-type: none;
`

const ItemList = ({ items=[] }) => (
  <BrankUL>
    {items.map((item, index) => (
      <Item key={index} {...item} />
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
  ).isRequired
}

export default ItemList;
