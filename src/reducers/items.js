const items = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_ITEMS':
      return [
        ...state,
        ...action.data
      ];
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

export default items;
