const items = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_ITEMS':
      return action.items
          ? {...state, ...action.items}
          : state
    case 'INCREASE_POINT':
      return {...state, [action.key]: {...state[action.key], point: state[action.key].point+1}}
    default:
      return state;
  }
};

export default items;
