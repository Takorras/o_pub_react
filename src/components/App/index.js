import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Board from '../Board';
import VisibleItemList from '../../containers/VisibleItemList';
import AddItem from '../../containers/AddItem';
import { fetchItems } from '../../actions'

const Wrapper = styled.div`
  text-align: center;
`

class App extends React.Component {

  componentDidMount(){
    const {dispatch} = this.props;
    dispatch(fetchItems());
  }

  render(){
    return (
      <Wrapper>
        <Board />
        <AddItem />
        <VisibleItemList />
      </Wrapper>
    )
  }
}

export default connect()(App);
