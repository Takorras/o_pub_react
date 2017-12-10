import React from 'react';
import styled from 'styled-components';
import Board from '../Board';
import VisibleItemList from '../../containers/VisibleItemList';
import AddItem from '../../containers/AddItem';

const Wrapper = styled.div`
  text-align: center;
`

const App = () => (
  <Wrapper>
    <Board />
    <AddItem />
    <VisibleItemList />
  </Wrapper>
)

export default App;
