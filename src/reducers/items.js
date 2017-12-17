import PropTypes from 'prop-types'

const items = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_ITEMS':
      console.log(action.items);
      if (action.items) {
        return [
          ...state,
          ...Object.keys(action.items).map(key => action.items[key])
        ];
      }
      return [...state];
    case 'INCREASE_POINT':
      return state.map(item =>
        (item.id === action.id)
          ? {...item, point: item.point+1}
          : item
      );
    default:
      return state;
  }
};

items.propTypes = {
  action: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        point: PropTypes.number
      })
    )
  })
}

export default items;
