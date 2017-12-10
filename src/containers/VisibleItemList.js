import { connect } from 'react-redux';
import ItemList from '../components/ItemList';

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const VisibleItemList = connect(
  mapStateToProps
)(ItemList);

export default VisibleItemList;
