const items = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          id: action.id,
          point: action.point,
          text: action.text
        }
      ];
    case 'INCREASE_POINT':
      return state.map(item => {
        (item.id === action.id)
          ? {...item, point: item.point++}
          : item
      });
    default:
      return state;
  }
};

export default items;
