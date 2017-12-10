import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';

const Item = ({ text, point }) => (
  <li>
    <span text />
    <Label point />
  </li>
);

Item.propTypes = {
  text: PropTypes.string.isRequired,
  point: PropTypes.number.isRequired,
}

export default Item;