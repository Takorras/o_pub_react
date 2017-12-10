import React from 'react';
import styled from 'styled-components';
import Board from '../Board';
import ItemList from '../ItemList';
import AddItem from '../../containers/AddItem';

const Wrapper = styled.div`
  text-align: center;
`

const App = () => (
  <Wrapper>
    <Board />
    <AddItem />
    <ItemList />
  </Wrapper>
)

export default App;
