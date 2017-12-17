import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Item from '../Item';

const BrankUL = styled.ul`
  list-style-type: none;
`

const ItemList = ({ items={}, onItemClick }) => (
  <BrankUL>
    {Object.keys(items).map(key => (
      <Item key={key} {...items[key]} onItemClick={() => onItemClick(key, items[key])} />
    ))}
  </BrankUL>
)

ItemList.propTypes = {
  onItemClick: PropTypes.func.isRequired,
}

export default ItemList;
