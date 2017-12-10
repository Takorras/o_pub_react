let nextItemId = 0;

export const addItem = text => {
  return {
    type: 'ADD_ITEM',
    id: nextItemId++,
    point: 0,
    text
  }
}

export const increasePoint = id => {
  return {
    type: 'INCREASE_POINT',
    id
  }
}
