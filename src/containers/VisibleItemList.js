import { connect } from 'react-redux';
import ItemList from '../components/ItemList';
import { increasePoint } from '../actions';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    onItemClick: id => {
      dispatch(increasePoint(id));
    }
  }
}

const VisibleItemList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);

export default VisibleItemList;
