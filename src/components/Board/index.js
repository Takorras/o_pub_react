import React from 'react';
import styled from 'styled-components';
import { Input } from 'semantic-ui-react';

const Wrapper = styled.div`
  text-align: center;
`

const Board = () => (
  <Wrapper>
    <h1>おっ</h1>
    <h1>と思った事を今すぐ共有</h1>
    <Input />
  </Wrapper>
);

export default Board;
