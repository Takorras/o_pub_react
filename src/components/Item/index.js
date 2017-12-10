import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Label } from 'semantic-ui-react';

const LabelWrapper = styled.span`
  margin-left: 36px;
`

const LiWrapper = styled.li`
  margin-bottom: 16px;
`

const Item = ({ text, point, onClick }) => (
  <LiWrapper>
    <span>{text}</span>
    <LabelWrapper>
      <Label color='blue' onClick={onClick}>{point} オッ</Label>
    </LabelWrapper>
  </LiWrapper>
);

Item.propTypes = {
  text: PropTypes.string.isRequired,
  point: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Item;
