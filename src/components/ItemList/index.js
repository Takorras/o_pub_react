import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  text-align: center;
`

const ItemList = ({ items=[] }) => (
  <Wrapper>
    <ul>
      {items.map((item, index) => (
        <li>{item.text}</li>
      ))}
    </ul>
  </Wrapper>
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
