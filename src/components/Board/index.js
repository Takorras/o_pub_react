import React from 'react';
import styled from 'styled-components';
import ooo from '../../assets/o.png';

const Wrapper = styled.div`
  margin: 48px;
`

const Board = () => (
  <Wrapper>
    <img src={ooo} alt='オッ'/>
    <h1>と思った事を今すぐ共有</h1>
  </Wrapper>
);

export default Board;
